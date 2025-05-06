
import { cn } from "@/lib/utils";
import { AlertTriangle, CheckCircle2, Info, XCircle } from "lucide-react";

interface Alert {
  id: string;
  title: string;
  description: string;
  type: "critical" | "warning" | "info" | "success";
  time: string;
}

interface QualityAlertsProps {
  alerts: Alert[];
  className?: string;
}

const QualityAlerts = ({ alerts, className }: QualityAlertsProps) => {
  const getAlertIcon = (type: Alert["type"]) => {
    switch (type) {
      case "critical":
        return <XCircle className="h-5 w-5 text-red-500" />;
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-nexus-yellow" />;
      case "info":
        return <Info className="h-5 w-5 text-blue-500" />;
      case "success":
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      default:
        return null;
    }
  };

  return (
    <div className={cn("data-card", className)}>
      <h3 className="font-semibold text-lg mb-4">AI Risk Alerts</h3>
      <div className="space-y-3">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={cn(
              "p-3 rounded-md border flex items-start gap-3",
              alert.type === "critical" && "bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800",
              alert.type === "warning" && "bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-800",
              alert.type === "info" && "bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800",
              alert.type === "success" && "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800"
            )}
          >
            <div className="mt-0.5">{getAlertIcon(alert.type)}</div>
            <div>
              <h4 className="font-medium">{alert.title}</h4>
              <p className="text-sm text-muted-foreground">{alert.description}</p>
              <p className="text-xs mt-1 text-muted-foreground">{alert.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QualityAlerts;
