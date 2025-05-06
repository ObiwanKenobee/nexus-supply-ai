
import { FileSearch, CheckCircle2, XCircle, Info, AlertTriangle, BarChart3, Camera } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/dashboard/StatCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import DefectTrends from "@/components/dashboard/DefectTrends";

const QAEngine = () => {
  // Mock data for defect trends
  const defectData = [
    { name: "Surface Finish", value: 120, fill: "#2DFEFF" },
    { name: "Alignment", value: 86, fill: "#2DFEFF" },
    { name: "Dimension", value: 64, fill: "#2DFEFF" },
    { name: "Material", value: 43, fill: "#2DFEFF" },
    { name: "Assembly", value: 28, fill: "#2DFEFF" }
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

  // Mock inspection data
  const inspections = [
    {
      id: "INSP-2025-1245",
      part: "Engine Components B-29",
      supplier: "AutoTech Industries",
      date: "May 5, 2025",
      passRate: "88%",
      status: "failed",
      inspector: "J. Martinez"
    },
    {
      id: "INSP-2025-1246",
      part: "Control Modules C-12",
      supplier: "ElectroSystems",
      date: "May 5, 2025",
      passRate: "94%",
      status: "passed",
      inspector: "L. Washington"
    },
    {
      id: "INSP-2025-1247",
      part: "Chassis Parts A-7",
      supplier: "MetalWorks Co.",
      date: "May 4, 2025",
      passRate: "97%",
      status: "passed",
      inspector: "A. Johnson"
    },
    {
      id: "INSP-2025-1248", 
      part: "Interior Trim Kits",
      supplier: "LuxFittings Inc.",
      date: "May 4, 2025",
      passRate: "92%",
      status: "passed",
      inspector: "R. Patel"
    },
    {
      id: "INSP-2025-1249",
      part: "Brake Systems X-50",
      supplier: "BrakeMasters Co.",
      date: "May 3, 2025",
      passRate: "78%",
      status: "failed",
      inspector: "S. Garcia"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "passed":
        return <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Passed</span>;
      case "failed":
        return <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">Failed</span>;
      case "pending":
        return <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">Pending</span>;
      default:
        return null;
    }
  };

  const getAlertIcon = (type: string) => {
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
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Quality Assurance Engine</h1>
        <p className="text-muted-foreground">AI-powered quality control system for your supply chain.</p>
      </div>
      
      {/* Stats row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard 
          title="Components Inspected" 
          value="1,284" 
          delta={{ value: "+12%", trend: "up" }} 
          icon={<FileSearch className="h-5 w-5" />}
        />
        <StatCard 
          title="Avg. Pass Rate" 
          value="94.2%" 
          delta={{ value: "+1.2%", trend: "up" }} 
          icon={<CheckCircle2 className="h-5 w-5" />}
        />
        <StatCard 
          title="Quality Issues" 
          value={16} 
          delta={{ value: "+3", trend: "down" }} 
          icon={<AlertTriangle className="h-5 w-5" />}
        />
        <StatCard 
          title="AI Inspections" 
          value="68%" 
          delta={{ value: "+5%", trend: "up" }} 
          icon={<Camera className="h-5 w-5" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Quality Alerts */}
        <div className="data-card">
          <h3 className="font-semibold text-lg mb-4">AI Risk Alerts</h3>
          <div className="space-y-3">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className={`p-3 rounded-md border flex items-start gap-3 ${
                  alert.type === "critical" ? "bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800" :
                  alert.type === "warning" ? "bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-800" :
                  alert.type === "info" ? "bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800" :
                  "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800"
                }`}
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

        {/* Defect Trends */}
        <div className="lg:col-span-2">
          <div className="data-card h-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-lg">Defect Analysis</h3>
              <Button variant="outline" size="sm" className="gap-1">
                <BarChart3 className="h-4 w-4 mr-1" /> Full Report
              </Button>
            </div>
            <DefectTrends data={defectData} />
          </div>
        </div>
      </div>

      {/* QA Inspection Tabs */}
      <div className="data-card">
        <h2 className="text-xl font-semibold mb-4">Quality Inspections</h2>
        <Tabs defaultValue="recent" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="recent">Recent Inspections</TabsTrigger>
            <TabsTrigger value="pending">Pending Inspections</TabsTrigger>
            <TabsTrigger value="failed">Failed Inspections</TabsTrigger>
          </TabsList>
          <TabsContent value="recent" className="mt-0">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Part</TableHead>
                    <TableHead>Supplier</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Inspector</TableHead>
                    <TableHead>Pass Rate</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {inspections.map((inspection) => (
                    <TableRow key={inspection.id}>
                      <TableCell className="font-medium">{inspection.id}</TableCell>
                      <TableCell>{inspection.part}</TableCell>
                      <TableCell>{inspection.supplier}</TableCell>
                      <TableCell>{inspection.date}</TableCell>
                      <TableCell>{inspection.inspector}</TableCell>
                      <TableCell>{inspection.passRate}</TableCell>
                      <TableCell>{getStatusBadge(inspection.status)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          <TabsContent value="pending" className="mt-0">
            <div className="flex items-center justify-center py-8 text-center text-muted-foreground">
              <div>
                <Camera className="h-12 w-12 mx-auto mb-4 opacity-30" />
                <h3 className="text-lg font-medium mb-1">No pending inspections</h3>
                <p>All parts have been inspected or are in process</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="failed" className="mt-0">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Part</TableHead>
                    <TableHead>Supplier</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Inspector</TableHead>
                    <TableHead>Pass Rate</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {inspections.filter(i => i.status === "failed").map((inspection) => (
                    <TableRow key={inspection.id}>
                      <TableCell className="font-medium">{inspection.id}</TableCell>
                      <TableCell>{inspection.part}</TableCell>
                      <TableCell>{inspection.supplier}</TableCell>
                      <TableCell>{inspection.date}</TableCell>
                      <TableCell>{inspection.inspector}</TableCell>
                      <TableCell>{inspection.passRate}</TableCell>
                      <TableCell>{getStatusBadge(inspection.status)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default QAEngine;
