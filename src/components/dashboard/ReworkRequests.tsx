
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ReworkRequest {
  id: string;
  part: string;
  supplier: string;
  quantity: number;
  priority: "high" | "medium" | "low";
  status: "pending" | "in-progress" | "completed";
}

interface ReworkRequestsProps {
  requests: ReworkRequest[];
  className?: string;
}

const ReworkRequests = ({ requests, className }: ReworkRequestsProps) => {
  const getPriorityBadge = (priority: ReworkRequest["priority"]) => {
    return (
      <span
        className={cn(
          "px-2 py-0.5 text-xs font-medium rounded-full",
          priority === "high" && "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
          priority === "medium" && "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
          priority === "low" && "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
        )}
      >
        {priority}
      </span>
    );
  };

  const getStatusBadge = (status: ReworkRequest["status"]) => {
    return (
      <span
        className={cn(
          "px-2 py-0.5 text-xs font-medium rounded-full",
          status === "pending" && "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400",
          status === "in-progress" && "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
          status === "completed" && "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
        )}
      >
        {status.replace("-", " ")}
      </span>
    );
  };

  return (
    <div className={cn("data-card", className)}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg">Rework Request Portal</h3>
        <Button variant="ghost" size="sm" className="text-xs gap-1 h-8">
          View All <ArrowRight className="h-3 w-3 ml-1" />
        </Button>
      </div>
      
      <div className="space-y-3">
        {requests.map((request) => (
          <div key={request.id} className="flex items-start justify-between border-b pb-3 last:border-0">
            <div>
              <p className="font-medium">{request.part}</p>
              <p className="text-sm text-muted-foreground">
                {request.supplier} • {request.quantity} units
              </p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <div>{getPriorityBadge(request.priority)}</div>
              <div>{getStatusBadge(request.status)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReworkRequests;
