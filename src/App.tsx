
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Shipments from "./pages/Shipments";
import QAEngine from "./pages/QAEngine";
import Suppliers from "./pages/Suppliers";
import Rework from "./pages/Rework";
import ESGAnalytics from "./pages/ESGAnalytics";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/shipments" element={<Shipments />} />
          <Route path="/qa-engine" element={<QAEngine />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/rework" element={<Rework />} />
          <Route path="/esg-analytics" element={<ESGAnalytics />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
