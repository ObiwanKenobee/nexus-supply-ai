
import { PackageOpen, Truck, ArrowRight, Map, CalendarRange, AlertTriangle } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/dashboard/StatCard";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import LiveLogisticsMap from "@/components/dashboard/LiveLogisticsMap";

const Shipments = () => {
  const shipments = [
    {
      id: "SH-2025-7842",
      product: "Engine Components B-29",
      supplier: "AutoTech Industries",
      origin: "Detroit, MI",
      destination: "Austin, TX",
      status: "in-transit",
      departure: "May 4, 2025",
      eta: "May 8, 2025"
    },
    {
      id: "SH-2025-7843",
      product: "Control Modules C-12",
      supplier: "ElectroSystems",
      origin: "Shanghai, CN",
      destination: "Los Angeles, CA",
      status: "delayed",
      departure: "Apr 28, 2025",
      eta: "May 12, 2025"
    },
    {
      id: "SH-2025-7844",
      product: "Chassis Parts A-7",
      supplier: "MetalWorks Co.",
      origin: "Toronto, CA",
      destination: "Chicago, IL",
      status: "delivered",
      departure: "May 1, 2025",
      eta: "May 4, 2025"
    },
    {
      id: "SH-2025-7845",
      product: "Interior Trim Kits",
      supplier: "LuxFittings Inc.",
      origin: "Munich, DE",
      destination: "Detroit, MI",
      status: "processing",
      departure: "May 6, 2025",
      eta: "May 17, 2025"
    },
    {
      id: "SH-2025-7846",
      product: "Brake Systems X-50",
      supplier: "BrakeMasters Co.",
      origin: "Osaka, JP",
      destination: "Seattle, WA",
      status: "in-transit",
      departure: "May 3, 2025",
      eta: "May 15, 2025"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "in-transit":
        return <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">In Transit</span>;
      case "delayed":
        return <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">Delayed</span>;
      case "delivered":
        return <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Delivered</span>;
      case "processing":
        return <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400">Processing</span>;
      default:
        return null;
    }
  };

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Shipment Management</h1>
        <p className="text-muted-foreground">Track and manage all active shipments in your supply chain.</p>
      </div>
      
      {/* Stats row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard 
          title="Active Shipments" 
          value={42} 
          delta={{ value: "+4%", trend: "up" }} 
          icon={<Truck className="h-5 w-5" />}
        />
        <StatCard 
          title="In Transit" 
          value={28} 
          delta={{ value: "+2", trend: "up" }} 
          icon={<PackageOpen className="h-5 w-5" />}
        />
        <StatCard 
          title="Delayed" 
          value={7} 
          delta={{ value: "-1", trend: "up" }} 
          icon={<AlertTriangle className="h-5 w-5" />}
        />
        <StatCard 
          title="Avg. Transit Time" 
          value="7.2 days" 
          delta={{ value: "-0.5 days", trend: "up" }} 
          icon={<CalendarRange className="h-5 w-5" />}
        />
      </div>

      {/* Map view */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Global Shipment Map</h2>
          <Button variant="outline" size="sm" className="gap-1">
            <Map className="h-4 w-4 mr-1" /> Expand View
          </Button>
        </div>
        <LiveLogisticsMap />
      </div>

      {/* Shipments table */}
      <div className="data-card">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Active Shipments</h2>
          <Button variant="outline" size="sm" className="gap-1">
            View All <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Shipment ID</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Supplier</TableHead>
                <TableHead>Origin</TableHead>
                <TableHead>Destination</TableHead>
                <TableHead>ETA</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {shipments.map((shipment) => (
                <TableRow key={shipment.id}>
                  <TableCell className="font-medium">{shipment.id}</TableCell>
                  <TableCell>{shipment.product}</TableCell>
                  <TableCell>{shipment.supplier}</TableCell>
                  <TableCell>{shipment.origin}</TableCell>
                  <TableCell>{shipment.destination}</TableCell>
                  <TableCell>{shipment.eta}</TableCell>
                  <TableCell>{getStatusBadge(shipment.status)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Shipments;
