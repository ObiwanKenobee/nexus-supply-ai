
import { cn } from "@/lib/utils";

interface Shipment {
  id: string;
  product: string;
  supplier: string;
  status: "in-transit" | "delayed" | "delivered" | "processing";
  eta: string;
  origin: string;
  destination: string;
}

interface ShipmentTimelineProps {
  shipments: Shipment[];
  className?: string;
}

const ShipmentTimeline = ({ shipments, className }: ShipmentTimelineProps) => {
  const getStatusIndicator = (status: Shipment["status"]) => {
    switch (status) {
      case "in-transit":
        return <span className="status-indicator status-good mr-2" />;
      case "delayed":
        return <span className="status-indicator status-warning mr-2" />;
      case "delivered":
        return <span className="status-indicator bg-blue-500 mr-2" />;
      case "processing":
        return <span className="status-indicator bg-purple-500 mr-2" />;
      default:
        return null;
    }
  };

  return (
    <div className={cn("data-card", className)}>
      <h3 className="font-semibold text-lg mb-4">Shipment Timeline</h3>
      <div className="space-y-4">
        {shipments.map((shipment) => (
          <div key={shipment.id} className="flex items-start border-b pb-3 last:border-0">
            <div className="flex-1">
              <div className="flex items-center">
                {getStatusIndicator(shipment.status)}
                <span className="font-medium">{shipment.product}</span>
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                From: {shipment.origin} • To: {shipment.destination}
              </div>
              <div className="mt-1 flex items-center text-sm">
                <span className="font-medium">ETA: {shipment.eta}</span>
                <span className="mx-2 text-muted-foreground">•</span>
                <span className="capitalize">{shipment.status.replace("-", " ")}</span>
              </div>
            </div>
            <div className="text-sm text-right text-muted-foreground">
              {shipment.supplier}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShipmentTimeline;
