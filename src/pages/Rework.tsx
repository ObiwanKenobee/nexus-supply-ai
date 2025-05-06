
import { RefreshCw, ArrowUp, ArrowDown, FilterX, CheckCircle2, AlarmClock, Clock } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/dashboard/StatCard";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Rework = () => {
  // Mock data for rework requests
  const reworkRequests = [
    {
      id: "RW-2025-0126",
      part: "Engine Components B-29",
      supplier: "AutoTech Industries",
      quantity: 240,
      reason: "Dimension out of spec",
      priority: "high",
      status: "in-progress",
      progress: 65,
      eta: "May 9, 2025"
    },
    {
      id: "RW-2025-0127",
      part: "Brake Pads X-5",
      supplier: "BrakeMasters Co.",
      quantity: 120,
      reason: "Material defect",
      priority: "medium",
      status: "in-progress",
      progress: 35,
      eta: "May 11, 2025"
    },
    {
      id: "RW-2025-0128",
      part: "Dashboard Panels",
      supplier: "InteriorFit Ltd.",
      quantity: 85,
      reason: "Surface finish issues",
      priority: "low",
      status: "pending",
      progress: 0,
      eta: "May 14, 2025"
    },
    {
      id: "RW-2025-0129",
      part: "Control Modules C-12",
      supplier: "ElectroSystems",
      quantity: 56,
      reason: "Component failure",
      priority: "high",
      status: "pending",
      progress: 0,
      eta: "May 8, 2025"
    },
    {
      id: "RW-2025-0130",
      part: "Interior Trim Kits",
      supplier: "LuxFittings Inc.",
      quantity: 150,
      reason: "Color mismatch",
      priority: "medium",
      status: "completed",
      progress: 100,
      eta: "May 4, 2025"
    },
    {
      id: "RW-2025-0131",
      part: "Chassis Parts A-7",
      supplier: "MetalWorks Co.",
      quantity: 42,
      reason: "Weld failure",
      priority: "high",
      status: "completed",
      progress: 100,
      eta: "May 2, 2025"
    }
  ];

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge variant="destructive">High</Badge>;
      case "medium":
        return <Badge variant="secondary" className="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 hover:bg-amber-100">Medium</Badge>;
      case "low":
        return <Badge variant="outline">Low</Badge>;
      default:
        return null;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "in-progress":
        return <RefreshCw className="h-4 w-4 text-blue-500 animate-spin" />;
      case "completed":
        return <CheckCircle2 className="h-4 w-4 text-green-500" />;
      case "pending":
        return <Clock className="h-4 w-4 text-amber-500" />;
      default:
        return null;
    }
  };
  
  // Calculate statistics
  const totalRequests = reworkRequests.length;
  const pendingRequests = reworkRequests.filter(r => r.status === "pending").length;
  const inProgressRequests = reworkRequests.filter(r => r.status === "in-progress").length;
  const completedRequests = reworkRequests.filter(r => r.status === "completed").length;
  const avgTurnaround = "4.2 days";

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Rework Management</h1>
        <p className="text-muted-foreground">Manage and track part rework requests across suppliers.</p>
      </div>
      
      {/* Stats row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
        <StatCard 
          title="Total Requests" 
          value={totalRequests} 
          icon={<RefreshCw className="h-5 w-5" />}
        />
        <StatCard 
          title="Pending" 
          value={pendingRequests}
          icon={<Clock className="h-5 w-5" />}
        />
        <StatCard 
          title="In Progress" 
          value={inProgressRequests} 
          icon={<AlarmClock className="h-5 w-5" />}
        />
        <StatCard 
          title="Completed" 
          value={completedRequests}
          delta={{ value: "+2", trend: "up" }} 
          icon={<CheckCircle2 className="h-5 w-5" />}
        />
        <StatCard 
          title="Avg. Turnaround" 
          value={avgTurnaround}
          delta={{ value: "-0.5 days", trend: "up" }} 
          icon={<FilterX className="h-5 w-5" />}
        />
      </div>

      {/* Rework Requests */}
      <div className="data-card">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Rework Workflow</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <ArrowUp className="h-4 w-4 mr-1" /> Export
            </Button>
            <Button variant="outline" size="sm">
              <ArrowDown className="h-4 w-4 mr-1" /> Import
            </Button>
            <Button size="sm">Create Request</Button>
          </div>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-4">
            <TabsTrigger value="all">All Requests</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="in-progress">In Progress</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Part</TableHead>
                    <TableHead>Supplier</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Reason</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Progress</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {reworkRequests.map((request) => (
                    <TableRow key={request.id}>
                      <TableCell className="font-medium">{request.id}</TableCell>
                      <TableCell>{request.part}</TableCell>
                      <TableCell>{request.supplier}</TableCell>
                      <TableCell>{request.quantity}</TableCell>
                      <TableCell>{request.reason}</TableCell>
                      <TableCell>{getPriorityBadge(request.priority)}</TableCell>
                      <TableCell>
                        <div className="w-full flex items-center gap-2">
                          <Progress value={request.progress} className="h-2 w-24" />
                          <span className="text-xs text-muted-foreground">{request.progress}%</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getStatusIcon(request.status)}
                          <span className="text-sm capitalize">{request.status.replace("-", " ")}</span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          {["pending", "in-progress", "completed"].map((status) => (
            <TabsContent key={status} value={status} className="mt-0">
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Part</TableHead>
                      <TableHead>Supplier</TableHead>
                      <TableHead>Quantity</TableHead>
                      <TableHead>Reason</TableHead>
                      <TableHead>Priority</TableHead>
                      <TableHead>Progress</TableHead>
                      <TableHead>ETA</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {reworkRequests
                      .filter((request) => request.status === status)
                      .map((request) => (
                        <TableRow key={request.id}>
                          <TableCell className="font-medium">{request.id}</TableCell>
                          <TableCell>{request.part}</TableCell>
                          <TableCell>{request.supplier}</TableCell>
                          <TableCell>{request.quantity}</TableCell>
                          <TableCell>{request.reason}</TableCell>
                          <TableCell>{getPriorityBadge(request.priority)}</TableCell>
                          <TableCell>
                            <div className="w-full flex items-center gap-2">
                              <Progress value={request.progress} className="h-2 w-24" />
                              <span className="text-xs text-muted-foreground">{request.progress}%</span>
                            </div>
                          </TableCell>
                          <TableCell>{request.eta}</TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Rework;
