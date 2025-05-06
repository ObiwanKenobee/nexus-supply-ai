
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Bell, Settings, Search, Package, FileSearch, Users, RefreshCw, BarChart3 } from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "Dashboard", path: "/dashboard", icon: <span className="w-5 h-5 flex items-center justify-center">D</span> },
    { label: "Shipments", path: "/shipments", icon: <Package className="h-5 w-5" /> },
    { label: "QA Engine", path: "/qa-engine", icon: <FileSearch className="h-5 w-5" /> },
    { label: "Suppliers", path: "/suppliers", icon: <Users className="h-5 w-5" /> },
    { label: "Rework", path: "/rework", icon: <RefreshCw className="h-5 w-5" /> },
    { label: "ESG Analytics", path: "/esg-analytics", icon: <BarChart3 className="h-5 w-5" /> }
  ];

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <aside
        className={cn(
          "bg-nexus-navy text-white fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-200 ease-in-out lg:relative lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-slate-700">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-nexus-cyan flex items-center justify-center">
              <span className="font-bold text-nexus-navy">N</span>
            </div>
            <h1 className="text-xl font-bold">Nexus</h1>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-5 w-5 text-slate-400" />
          </Button>
        </div>
        <nav className="p-4">
          <div className="space-y-1">
            {navItems.map((item) => (
              <NavItem 
                key={item.path}
                label={item.label} 
                path={item.path}
                icon={item.icon}
                active={location.pathname === item.path}
                onClick={() => navigate(item.path)}
              />
            ))}
          </div>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top navbar */}
        <header className="bg-white dark:bg-slate-800 border-b h-16 flex items-center px-4 shadow-sm">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          <div className="flex-1 flex items-center ml-2 lg:ml-0">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search shipments, suppliers..."
                className="pl-8 py-1.5 text-sm bg-slate-100 dark:bg-slate-700 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-nexus-cyan"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <div className="h-8 w-8 rounded-full bg-nexus-navy text-white flex items-center justify-center">
              <span className="text-sm font-medium">JD</span>
            </div>
          </div>
        </header>

        {/* Main content area */}
        <main className="flex-1 overflow-auto p-4 lg:p-8">{children}</main>
      </div>
    </div>
  );
};

// Helper component for sidebar navigation items
const NavItem = ({ 
  label, 
  active = false, 
  path,
  icon,
  onClick
}: { 
  label: string; 
  active?: boolean;
  path: string;
  icon?: React.ReactNode;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={cn(
      "flex items-center w-full px-3 py-2 text-sm rounded-md transition-colors",
      active
        ? "bg-slate-700 text-white"
        : "text-slate-300 hover:text-white hover:bg-slate-800"
    )}
  >
    {icon && <span className="mr-3">{icon}</span>}
    {label}
  </button>
);

export default DashboardLayout;
