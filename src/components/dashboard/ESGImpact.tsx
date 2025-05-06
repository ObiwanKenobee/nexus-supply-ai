
import { cn } from "@/lib/utils";
import { Leaf } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface ESGMetric {
  label: string;
  value: number;
  target: number;
  unit: string;
}

interface ESGImpactProps {
  metrics: ESGMetric[];
  className?: string;
}

const ESGImpact = ({ metrics, className }: ESGImpactProps) => {
  return (
    <div className={cn("data-card", className)}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg">ESG Impact</h3>
        <div className="p-1.5 bg-green-100 dark:bg-green-900/30 rounded-full">
          <Leaf className="h-5 w-5 text-green-600 dark:text-green-400" />
        </div>
      </div>
      <div className="space-y-4">
        {metrics.map((metric, index) => {
          const progress = Math.round((metric.value / metric.target) * 100);
          const isGood = metric.label.includes("Emissions") ? progress < 100 : progress > 100;
          
          return (
            <div key={index}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium">{metric.label}</span>
                <span className="text-sm text-muted-foreground">
                  {metric.value} / {metric.target} {metric.unit}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Progress
                  value={progress}
                  className={cn(
                    "h-2",
                    isGood ? "bg-green-100 dark:bg-green-900/30" : "bg-amber-100 dark:bg-amber-900/30",
                    "[&>div]:bg-green-500 dark:[&>div]:bg-green-500"
                  )}
                />
                <span
                  className={cn(
                    "text-xs font-medium",
                    isGood ? "text-green-600 dark:text-green-400" : "text-amber-600 dark:text-amber-400"
                  )}
                >
                  {progress}%
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ESGImpact;
