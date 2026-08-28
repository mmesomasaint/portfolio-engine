variable "aws_region" {
  description = "Target AWS Region"
  type        = string
  default     = "us-east-1"
}

variable "environment" {
  description = "Deployment environment"
  type        = string
  default     = "production"
}

variable "app_name" {
  description = "Application identifier"
  type        = string
  default     = "portfolio-sys"
}

variable "container_image" {
  description = "ECR Image URI (e.g., <account-id>.dkr.ecr.us-east-1.amazonaws.com/portfolio-sys:latest)"
  type        = string
}

variable "domain_name" {
  description = "Apex domain name for ACM and Route53 (optional)"
  type        = string
  default     = ""
}

variable "container_port" {
  description = "Port exposed by the Docker container"
  type        = number
  default     = 3000
}

variable "desired_count" {
  description = "Desired number of ECS Fargate tasks"
  type        = number
  default     = 2
}
