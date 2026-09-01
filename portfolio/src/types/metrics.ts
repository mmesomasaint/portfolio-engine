export interface SystemHealthStatus {
  status: "healthy" | "degraded" | "down";
  service: string;
  timestamp: string;
  uptimeSeconds: number;
  environment: string;
  region: string;
}
