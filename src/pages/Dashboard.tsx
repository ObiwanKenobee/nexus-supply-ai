
import { Package, Boxes, AlertTriangle } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/dashboard/StatCard";
import ShipmentTimeline from "@/components/dashboard/ShipmentTimeline";
import QualityAlerts from "@/components/dashboard/QualityAlerts";
import DefectTrends from "@/components/dashboard/DefectTrends";
import LiveLogisticsMap from "@/components/dashboard/LiveLogisticsMap";
import ReworkRequests from "@/components/dashboard/ReworkRequests";
import ESGImpact from "@/components/dashboard/ESGImpact";

const Dashboard = () => {
  // Mock data for shipments
  const shipments = [
    {
      id: "1",
      product: "Engine Components B-29",
      supplier: "AutoTech Industries",
      status: "in-transit" as const,
      eta: "Aug 24, 2:30 PM",
      origin: "Detroit, MI",
      destination: "Austin, TX"
    },
    {
      id: "2",
      product: "Control Modules C-12",
      supplier: "ElectroSystems",
      status: "delayed" as const,
      eta: "Aug 25, 10:00 AM",
      origin: "Shanghai, CN",
      destination: "Los Angeles, CA"
    },
    {
      id: "3",
      product: "Chassis Parts A-7",
      supplier: "MetalWorks Co.",
      status: "delivered" as const,
      eta: "Aug 23, 8:15 AM",
      origin: "Toronto, CA",
      destination: "Chicago, IL"
    },
    {
      id: "4",
      product: "Interior Trim Kits",
      supplier: "LuxFittings Inc.",
      status: "processing" as const,
      eta: "Aug 26, 4:00 PM",
      origin: "Munich, DE",
      destination: "Detroit, MI"
    }
  ];

  // Mock data for quality alerts
  const alerts = [
    {
      id: "1",
      title: "Critical: Quality threshold exceeded",
      description: "B-29 Engine Components batch #4572 showing 12% defect rate (threshold 5%)",
      type: "critical" as const,
      time: "2 hours ago"
    },
    {
      id: "2",
      title: "Potential supplier issue detected",
      description: "AI pattern analysis detected consistent defect in ElectroSystems shipments",
      type: "warning" as const,
      time: "4 hours ago"
    },
    {
      id: "3",
      title: "New shipment arrived at inspection",
      description: "MetalWorks Chassis Parts A-7 ready for inspection in Bay 3",
      type: "info" as const,
      time: "8 hours ago"
    }
  ];

  // Mock data for defect trends
  const defectData = [
    { name: "Surface Finish", value: 120, fill: "#2DFEFF" },
    { name: "Alignment", value: 86, fill: "#2DFEFF" },
    { name: "Dimension", value: 64, fill: "#2DFEFF" },
    { name: "Material", value: 43, fill: "#2DFEFF" },
    { name: "Assembly", value: 28, fill: "#2DFEFF" }
  ];

  // Mock data for rework requests
  const reworkRequests = [
    {
      id: "1",
      part: "Engine Components B-29",
      supplier: "AutoTech Industries",
      quantity: 240,
      priority: "high" as const,
      status: "pending" as const
    },
    {
      id: "2",
      part: "Brake Pads X-5",
      supplier: "BrakeMasters Co.",
      quantity: 120,
      priority: "medium" as const,
      status: "in-progress" as const
    },
    {
      id: "3",
      part: "Dashboard Panels",
      supplier: "InteriorFit Ltd.",
      quantity: 85,
      priority: "low" as const,
      status: "completed" as const
    }
  ];

  // Mock data for ESG metrics
  const esgMetrics = [
    {
      label: "Carbon Emissions",
      value: 842,
      target: 1000,
      unit: "tons"
    },
    {
      label: "Water Usage",
      value: 2800,
      target: 3000,
      unit: "kL"
    },
    {
      label: "Renewable Energy",
      value: 72,
      target: 60,
      unit: "%"
    }
  ];

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Mission Control Dashboard</h1>
        <p className="text-muted-foreground">OEM view with live logistics and quality metrics.</p>
      </div>
      
      {/* Stats row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
        <StatCard 
          title="Active Shipments" 
          value={42} 
          delta={{ value: "+4%", trend: "up" }} 
          icon={<Package className="h-5 w-5" />}
        />
        <StatCard 
          title="Components Inspected" 
          value="1,284" 
          delta={{ value: "+12%", trend: "up" }} 
          icon={<Boxes className="h-5 w-5" />}
        />
        <StatCard 
          title="Quality Issues" 
          value={16} 
          delta={{ value: "+3", trend: "down" }} 
          icon={<AlertTriangle className="h-5 w-5" />}
        />
        <StatCard 
          title="Avg. QA Pass Rate" 
          value="94.2%" 
          delta={{ value: "+1.2%", trend: "up" }} 
        />
      </div>
      
      {/* Main dashboard grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <LiveLogisticsMap className="mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DefectTrends data={defectData} />
            <ESGImpact metrics={esgMetrics} />
          </div>
        </div>
        
        <div className="space-y-6">
          <QualityAlerts alerts={alerts} />
          <ShipmentTimeline shipments={shipments} />
          <ReworkRequests requests={reworkRequests} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
