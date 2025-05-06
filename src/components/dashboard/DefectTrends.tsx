
import { cn } from "@/lib/utils";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface DefectData {
  name: string;
  value: number;
  fill: string;
}

interface DefectTrendsProps {
  data: DefectData[];
  className?: string;
}

const DefectTrends = ({ data, className }: DefectTrendsProps) => {
  return (
    <div className={cn("data-card", className)}>
      <h3 className="font-semibold text-lg mb-1">QA Defect Trends</h3>
      <p className="text-sm text-muted-foreground mb-4">Top defect types this month</p>
      <div className="h-[240px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 5, right: 5, left: 5, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
            <XAxis 
              dataKey="name" 
              tick={{ fontSize: 12 }} 
              tickLine={false}
              axisLine={{ stroke: '#e5e7eb' }}
              dy={8}
            />
            <YAxis hide />
            <Tooltip
              contentStyle={{ 
                borderRadius: '6px', 
                border: '1px solid #e5e7eb', 
                boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
                fontSize: '12px',
              }}
              formatter={(value: number) => [`${value} defects`, 'Count']}
            />
            <Bar 
              dataKey="value" 
              fill="#2DFEFF" 
              radius={[4, 4, 0, 0]} 
              barSize={30}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DefectTrends;
