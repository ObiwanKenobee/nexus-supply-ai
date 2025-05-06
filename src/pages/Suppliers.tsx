
import { Building, Users, Package, BarChart3, ShieldCheck, Star } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/dashboard/StatCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

const Suppliers = () => {
  // Mock data for suppliers
  const suppliersList = [
    {
      id: "1",
      name: "AutoTech Industries",
      location: "Detroit, MI",
      type: "Engine Components",
      relationship: "Strategic Partner",
      rating: 4.7,
      defectRate: 3.2,
      onTimeDelivery: 98,
      complianceScore: 92
    },
    {
      id: "2",
      name: "ElectroSystems",
      location: "Shanghai, CN",
      type: "Electronic Controls",
      relationship: "Preferred Supplier",
      rating: 4.2,
      defectRate: 5.8,
      onTimeDelivery: 86,
      complianceScore: 88
    },
    {
      id: "3",
      name: "MetalWorks Co.",
      location: "Toronto, CA",
      type: "Chassis & Frame",
      relationship: "Preferred Supplier",
      rating: 4.5,
      defectRate: 2.1,
      onTimeDelivery: 94,
      complianceScore: 95
    },
    {
      id: "4",
      name: "LuxFittings Inc.",
      location: "Munich, DE",
      type: "Interior Components",
      relationship: "Approved Supplier",
      rating: 4.0,
      defectRate: 4.3,
      onTimeDelivery: 92,
      complianceScore: 87
    },
    {
      id: "5",
      name: "BrakeMasters Co.",
      location: "Osaka, JP",
      type: "Brake Systems",
      relationship: "Trial Supplier",
      rating: 3.8,
      defectRate: 6.5,
      onTimeDelivery: 84,
      complianceScore: 82
    },
    {
      id: "6",
      name: "CompositeWorks",
      location: "Barcelona, ES",
      type: "Composite Materials",
      relationship: "Strategic Partner",
      rating: 4.6,
      defectRate: 2.8,
      onTimeDelivery: 96,
      complianceScore: 97
    }
  ];

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('');
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return "bg-green-500";
    if (score >= 80) return "bg-blue-500";
    if (score >= 70) return "bg-yellow-500";
    return "bg-red-500";
  };

  const getDefectRateColor = (rate: number) => {
    if (rate <= 3) return "text-green-600";
    if (rate <= 5) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Supplier Portal</h1>
        <p className="text-muted-foreground">Manage and analyze your supply chain network.</p>
      </div>
      
      {/* Stats row */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
        <StatCard 
          title="Total Suppliers" 
          value={86} 
          icon={<Building className="h-5 w-5" />}
        />
        <StatCard 
          title="Strategic Partners" 
          value={12} 
          icon={<Users className="h-5 w-5" />}
        />
        <StatCard 
          title="Active Parts" 
          value="1,248" 
          icon={<Package className="h-5 w-5" />}
        />
        <StatCard 
          title="Avg. Compliance" 
          value="91%" 
          delta={{ value: "+2.4%", trend: "up" }}
          icon={<ShieldCheck className="h-5 w-5" />}
        />
      </div>
      
      {/* Search and filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Input 
            placeholder="Search suppliers..." 
            className="pl-10"
          />
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute left-3 top-3 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <Button variant="outline">Filter</Button>
        <Button className="gap-1">
          <BarChart3 className="h-4 w-4 mr-1" /> Analytics View
        </Button>
      </div>
      
      {/* Suppliers grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {suppliersList.map((supplier) => (
          <Card key={supplier.id} className="overflow-hidden">
            <CardHeader className="p-4 pb-0">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-nexus-navy text-white">
                      {getInitials(supplier.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">{supplier.name}</CardTitle>
                    <CardDescription>
                      {supplier.location} • {supplier.type}
                    </CardDescription>
                  </div>
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-nexus-yellow text-nexus-yellow" />
                  <span className="ml-1 font-medium">{supplier.rating}</span>
                </div>
              </div>
              <div className="mt-4 px-2 py-1 rounded-full text-xs font-medium inline-block bg-slate-100 dark:bg-slate-800">
                {supplier.relationship}
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>On-Time Delivery</span>
                    <span className="font-medium">{supplier.onTimeDelivery}%</span>
                  </div>
                  <Progress value={supplier.onTimeDelivery} className="h-1.5" />
                </div>
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Compliance Score</span>
                    <span className="font-medium">{supplier.complianceScore}%</span>
                  </div>
                  <Progress value={supplier.complianceScore} className="h-1.5" />
                </div>
                <div className="flex justify-between text-sm">
                  <span>Defect Rate</span>
                  <span className={`font-medium ${getDefectRateColor(supplier.defectRate)}`}>
                    {supplier.defectRate}%
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between">
              <Button variant="outline" size="sm">Profile</Button>
              <Button size="sm">Contact</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Suppliers;
