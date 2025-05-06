
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the dashboard
    navigate("/dashboard");
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded bg-nexus-cyan animate-pulse flex items-center justify-center">
          <span className="font-bold text-nexus-navy">N</span>
        </div>
        <span className="text-xl font-semibold">Loading Nexus...</span>
      </div>
    </div>
  );
};

export default Index;
