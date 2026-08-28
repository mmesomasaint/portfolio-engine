output "alb_dns_name" {
  description = "Application Load Balancer Public Endpoint"
  value       = aws_lb.main.dns_name
}

output "ecs_cluster_name" {
  description = "ECS Cluster Name"
  value       = aws_ecs_cluster.main.name
}

output "cloudwatch_log_group" {
  description = "CloudWatch Logs Target"
  value       = aws_cloudwatch_log_group.ecs_logs.name
}
