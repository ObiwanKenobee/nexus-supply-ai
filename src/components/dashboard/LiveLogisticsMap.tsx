
import { cn } from "@/lib/utils";
import { MapPin } from "lucide-react";

interface LiveLogisticsMapProps {
  className?: string;
}

// This is a placeholder for the map visualization
// In a real implementation, we would integrate with Mapbox GL
const LiveLogisticsMap = ({ className }: LiveLogisticsMapProps) => {
  return (
    <div className={cn("data-card", className)}>
      <h3 className="font-semibold text-lg mb-4">Live Logistics Map</h3>
      <div className="relative h-[300px] rounded-md bg-slate-100 dark:bg-slate-800 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <MapPin className="h-8 w-8 mx-auto mb-2" />
            <p className="text-sm">Interactive Global Supply Map</p>
            <p className="text-xs mt-1">
              Connect to Mapbox to visualize global supply flows
            </p>
          </div>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between text-sm">
        <div>
          <div className="flex items-center">
            <span className="status-indicator status-good mr-2"></span>
            <span>On track: 42</span>
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <span className="status-indicator status-warning mr-2"></span>
            <span>Delayed: 7</span>
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <span className="status-indicator status-critical mr-2"></span>
            <span>Critical: 2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveLogisticsMap;
