# ------------------------------------------------------------------------------
# 1. Variables for GitHub Actions OIDC
# ------------------------------------------------------------------------------
variable "github_org" {
  description = "GitHub username or organization name"
  type        = string
  default     = "mmesomasaint"
}

variable "github_repo" {
  description = "Target GitHub repository name"
  type        = string
  default     = "portfolio"
}

variable "github_branch" {
  description = "Allowed branch to assume the production deployment role"
  type        = string
  default     = "main"
}

# ------------------------------------------------------------------------------
# 2. GitHub Actions OIDC Provider Registration
# ------------------------------------------------------------------------------
# Fetch GitHub's OIDC certificate thumbprint dynamically
data "tls_certificate" "github_actions" {
  url = "https://token.actions.githubusercontent.com/.well-known/openid-configuration"
}

resource "aws_iam_openid_connect_provider" "github" {
  url             = "https://token.actions.githubusercontent.com"
  client_id_list  = ["sts.amazonaws.com"]
  thumbprint_list = [data.tls_certificate.github_actions.certificates[0].sha1_fingerprint]

  tags = {
    Name        = "GitHubActions-OIDC"
    Environment = var.environment
  }
}

# ------------------------------------------------------------------------------
# 3. IAM Role with Zero-Trust AssumeRoleWithWebIdentity Policy
# ------------------------------------------------------------------------------
data "aws_iam_policy_document" "github_oidc_trust" {
  statement {
    sid     = "GitHubActionsOIDCAuth"
    effect  = "Allow"
    actions = ["sts:AssumeRoleWithWebIdentity"]

    principals {
      type        = "Federated"
      identifiers = [aws_iam_openid_connect_provider.github.arn]
    }

    condition {
      test     = "StringEquals"
      variable = "token.actions.githubusercontent.com:aud"
      values   = ["sts.amazonaws.com"]
    }

    # Strict subject claim restriction: Only allows the specified repo & branch
    condition {
      test     = "StringLike"
      variable = "token.actions.githubusercontent.com:sub"
      values   = ["repo:${var.github_org}/${var.github_repo}:ref:refs/heads/${var.github_branch}"]
    }
  }
}

resource "aws_iam_role" "github_deploy_role" {
  name                 = "${var.app_name}-github-deploy-role"
  description          = "Scoped IAM role assumed by GitHub Actions for portfolio deployment"
  assume_role_policy   = data.aws_iam_policy_document.github_oidc_trust.json
  max_session_duration = 3600 # 1 hour temporary token
}

# ------------------------------------------------------------------------------
# 4. Scoped Deployment Permission Policy (Least-Privilege)
# ------------------------------------------------------------------------------
data "aws_iam_policy_document" "deployment_permissions" {
  # 1. ECR Permissions (Build & Push Docker Image)
  statement {
    sid    = "ECRAuthentication"
    effect = "Allow"
    actions = [
      "ecr:GetAuthorizationToken"
    ]
    resources = ["*"]
  }

  statement {
    sid    = "ECRRepositoryOperations"
    effect = "Allow"
    actions = [
      "ecr:BatchCheckLayerAvailability",
      "ecr:GetDownloadUrlForLayer",
      "ecr:BatchGetImage",
      "ecr:PutImage",
      "ecr:InitiateLayerUpload",
      "ecr:UploadLayerPart",
      "ecr:CompleteLayerUpload"
    ]
    resources = ["arn:aws:ecr:${var.aws_region}:*:repository/${var.app_name}*"]
  }

  # 2. ECS Fargate Deployment & Service Updates
  statement {
    sid    = "ECSDeploymentOperations"
    effect = "Allow"
    actions = [
      "ecs:DescribeServices",
      "ecs:DescribeTaskDefinition",
      "ecs:DescribeTasks",
      "ecs:ListTasks",
      "ecs:UpdateService",
      "ecs:RegisterTaskDefinition"
    ]
    resources = ["*"]
  }

  # 3. IAM PassRole for ECS Task & Execution Roles
  statement {
    sid    = "IAMPassRoleForECS"
    effect = "Allow"
    actions = [
      "iam:PassRole"
    ]
    resources = [
      aws_iam_role.ecs_execution_role.arn,
      aws_iam_role.ecs_task_role.arn
    ]
  }

  # 4. CloudWatch Log Read
  statement {
    sid    = "CloudWatchDiagnostics"
    effect = "Allow"
    actions = [
      "logs:DescribeLogStreams",
      "logs:GetLogEvents"
    ]
    resources = ["arn:aws:logs:${var.aws_region}:*:log-group:/ecs/${var.app_name}*"]
  }
}

resource "aws_iam_policy" "github_deploy_policy" {
  name        = "${var.app_name}-github-deploy-policy"
  description = "Permissions required for GitHub Actions to push images and roll out ECS tasks"
  policy      = data.aws_iam_policy_document.deployment_permissions.json
}

resource "aws_iam_role_policy_attachment" "attach_deploy_policy" {
  role       = aws_iam_role.github_deploy_role.name
  policy_arn = aws_iam_policy.github_deploy_policy.arn
}

# ------------------------------------------------------------------------------
# 5. Output Role ARN for GitHub Repository Secrets
# ------------------------------------------------------------------------------
output "github_actions_role_arn" {
  description = "Value to place in GitHub Secret: AWS_OIDC_ROLE_ARN"
  value       = aws_iam_role.github_deploy_role.arn
}
