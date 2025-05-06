
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  delta?: {
    value: string | number;
    trend: "up" | "down" | "neutral";
  };
  icon?: ReactNode;
  className?: string;
}

const StatCard = ({ title, value, delta, icon, className }: StatCardProps) => {
  return (
    <div className={cn("data-card", className)}>
      <div className="flex items-start justify-between">
        <div>
          <p className="metric-label">{title}</p>
          <p className="metric-value mt-1">{value}</p>
          
          {delta && (
            <div className="flex items-center mt-1">
              <span
                className={cn(
                  "text-xs font-medium",
                  delta.trend === "up" && "text-green-600",
                  delta.trend === "down" && "text-red-600",
                  delta.trend === "neutral" && "text-slate-600"
                )}
              >
                {delta.value}{" "}
                {delta.trend === "up" && "↑"}
                {delta.trend === "down" && "↓"}
              </span>
            </div>
          )}
        </div>
        
        {icon && <div className="text-muted-foreground">{icon}</div>}
      </div>
    </div>
  );
};

export default StatCard;
