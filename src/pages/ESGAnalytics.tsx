
import { Leaf, TrendingDown, TrendingUp, LineChart, BarChart3, Download } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/dashboard/StatCard";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ESGAnalytics = () => {
  // Mock data for ESG metrics
  const carbonMetrics = [
    {
      label: "Carbon Emissions",
      value: 842,
      target: 1000,
      unit: "tons",
      trend: "down"
    },
    {
      label: "Water Usage",
      value: 2800,
      target: 3000,
      unit: "kL",
      trend: "down"
    },
    {
      label: "Renewable Energy",
      value: 72,
      target: 60,
      unit: "%",
      trend: "up"
    },
    {
      label: "Waste Reduction",
      value: 68,
      target: 75,
      unit: "%",
      trend: "up"
    }
  ];

  const topPerformers = [
    {
      supplier: "CompositeWorks",
      location: "Barcelona, ES",
      score: 94,
      reduction: 28
    },
    {
      supplier: "MetalWorks Co.",
      location: "Toronto, CA",
      score: 91,
      reduction: 22
    },
    {
      supplier: "AutoTech Industries",
      location: "Detroit, MI",
      score: 87,
      reduction: 19
    }
  ];

  const riskAreas = [
    {
      area: "Air Freight - Asia Routes",
      impact: "High carbon intensity",
      score: 68,
      recommendation: "Shift to sea freight where possible"
    },
    {
      area: "ElectroSystems Supply",
      impact: "Coal-powered facilities",
      score: 62,
      recommendation: "Supplier renewable energy program"
    },
    {
      area: "Packaging Materials",
      impact: "Non-recyclable components",
      score: 71,
      recommendation: "Switch to biodegradable alternatives"
    }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 85) return "bg-green-500";
    if (score >= 70) return "bg-blue-500";
    if (score >= 60) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">ESG Analytics</h1>
        <p className="text-muted-foreground">Environmental, Social and Governance impact tracking.</p>
      </div>
      
      {/* Stats row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard 
          title="Overall ESG Score" 
          value="84/100" 
          delta={{ value: "+5pts", trend: "up" }} 
          icon={<Leaf className="h-5 w-5" />}
        />
        <StatCard 
          title="Carbon Reduction" 
          value="18%" 
          delta={{ value: "vs Last Year", trend: "up" }} 
          icon={<TrendingDown className="h-5 w-5" />}
        />
        <StatCard 
          title="Compliance Rate" 
          value="96%" 
          delta={{ value: "+2%", trend: "up" }} 
          icon={<TrendingUp className="h-5 w-5" />}
        />
        <StatCard 
          title="ESG Investments" 
          value="$2.8M" 
          delta={{ value: "+$0.4M", trend: "up" }} 
          icon={<LineChart className="h-5 w-5" />}
        />
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Carbon metrics */}
        <div className="lg:col-span-2 data-card">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-lg">Sustainability Metrics</h3>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-1">
                <BarChart3 className="h-4 w-4 mr-1" /> 
                Detailed View
              </Button>
              <Button variant="outline" size="sm" className="gap-1">
                <Download className="h-4 w-4 mr-1" /> 
                Export Report
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {carbonMetrics.map((metric, index) => {
              const progress = Math.round((metric.value / metric.target) * 100);
              const isGood = metric.trend === "up" ? progress > 100 : progress < 100;
              
              return (
                <Card key={index} className="border">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">{metric.label}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-1">
                      <div className="flex items-baseline">
                        <span className="text-2xl font-bold">
                          {metric.value}
                        </span>
                        <span className="text-sm text-muted-foreground ml-1">
                          {metric.unit}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm text-muted-foreground mr-1">Target: {metric.target}</span>
                        {metric.trend === "down" ? (
                          <TrendingDown className={`h-4 w-4 ${isGood ? "text-green-500" : "text-red-500"}`} />
                        ) : (
                          <TrendingUp className={`h-4 w-4 ${isGood ? "text-green-500" : "text-red-500"}`} />
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Progress
                        value={progress}
                        className={`h-2 ${
                          isGood ? "bg-green-100 dark:bg-green-900/30" : "bg-amber-100 dark:bg-amber-900/30"
                        } [&>div]:${isGood ? "bg-green-500" : "bg-amber-500"}`}
                      />
                      <span className={`text-xs font-medium ${isGood ? "text-green-600" : "text-amber-600"}`}>
                        {progress}%
                      </span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* ESG Insights */}
        <div className="data-card">
          <Tabs defaultValue="top" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="top">Top Performers</TabsTrigger>
              <TabsTrigger value="risk">Risk Areas</TabsTrigger>
            </TabsList>
            <TabsContent value="top" className="pt-4">
              <h4 className="text-sm font-medium text-muted-foreground mb-4">Suppliers with best ESG improvements</h4>
              <div className="space-y-4">
                {topPerformers.map((performer, index) => (
                  <div key={index} className="flex items-center justify-between border-b pb-3 last:border-0">
                    <div>
                      <p className="font-medium">{performer.supplier}</p>
                      <p className="text-sm text-muted-foreground">{performer.location}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center justify-end">
                        <span className="font-medium">{performer.score}</span>
                        <div className={`ml-2 w-2 h-2 rounded-full ${getScoreColor(performer.score)}`}></div>
                      </div>
                      <p className="text-sm text-green-600">↓ {performer.reduction}% CO₂</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="risk" className="pt-4">
              <h4 className="text-sm font-medium text-muted-foreground mb-4">Areas requiring attention</h4>
              <div className="space-y-4">
                {riskAreas.map((area, index) => (
                  <div key={index} className="border-b pb-3 last:border-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium">{area.area}</p>
                        <p className="text-sm text-muted-foreground">{area.impact}</p>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium">{area.score}</span>
                        <div className={`ml-2 w-2 h-2 rounded-full ${getScoreColor(area.score)}`}></div>
                      </div>
                    </div>
                    <p className="text-xs mt-2 bg-slate-100 dark:bg-slate-800 p-2 rounded">
                      <span className="font-medium">AI Recommendation:</span> {area.recommendation}
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Carbon footprint visualization placeholder */}
      <div className="data-card">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-semibold text-lg">Carbon Footprint Analysis</h3>
          <Button variant="outline" size="sm">View Details</Button>
        </div>
        <div className="h-64 bg-slate-100 dark:bg-slate-800 rounded flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <BarChart3 className="h-12 w-12 mx-auto mb-2 opacity-30" />
            <p>Supply Chain Carbon Visualization</p>
            <p className="text-sm mt-1">Connect to actual data source for live carbon tracking</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ESGAnalytics;
