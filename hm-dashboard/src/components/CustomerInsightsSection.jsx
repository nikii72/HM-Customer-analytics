import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { segmentData } from "@/lib/dashboardData";

const COLORS = [
  "hsl(355, 100%, 45%)",
  "hsl(0, 0%, 13%)",
  "hsl(0, 0%, 40%)",
  "hsl(0, 0%, 65%)",
  "hsl(0, 0%, 82%)",
];

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div className="bg-primary text-primary-foreground px-4 py-3 rounded-lg shadow-xl text-sm">
      <p className="font-bold mb-1">{d.name}</p>
      <p className="text-primary-foreground/80">
        Customers: {d.count?.toLocaleString()} ({d.pctCustomers}%)
      </p>
      <p className="text-primary-foreground/80">
        Revenue: ${d.totalRevenue?.toLocaleString()} ({d.pctRevenue}%)
      </p>
      <p className="text-primary-foreground/80">
        Avg Value: ${d.avgRevenue?.toFixed(2)}
      </p>
    </div>
  );
};

export default function CustomerInsightsSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Segment Revenue Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-card border border-border rounded-xl p-6"
      >
        <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-1">
          RFM Segments
        </h3>
        <p className="text-2xl font-bold mb-6">Revenue by Segment</p>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={segmentData}
              layout="vertical"
              margin={{ top: 0, right: 10, left: 10, bottom: 0 }}
            >
              <XAxis
                type="number"
                tick={{ fontSize: 10, fill: "hsl(0,0%,40%)" }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
              />
              <YAxis
                type="category"
                dataKey="name"
                tick={{ fontSize: 12, fill: "hsl(0,0%,20%)", fontWeight: 500 }}
                axisLine={false}
                tickLine={false}
                width={90}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar
                dataKey="totalRevenue"
                radius={[0, 6, 6, 0]}
                animationDuration={1200}
              >
                {segmentData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Customer Distribution Pie */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="bg-card border border-border rounded-xl p-6"
      >
        <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-1">
          Distribution
        </h3>
        <p className="text-2xl font-bold mb-6">Customer Share</p>
        <div className="h-72 flex items-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={segmentData}
                dataKey="pctCustomers"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={3}
                animationDuration={1200}
              >
                {segmentData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i]} />
                ))}
              </Pie>
              <Tooltip
                formatter={(val, name) => [`${val}%`, name]}
                contentStyle={{
                  background: "#f95050",
                  border: "none",
                  borderRadius: 8,
                  color: "white",
                  fontSize: 13,
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-wrap gap-3 justify-center mt-2">
          {segmentData.map((s, i) => (
            <div key={s.name} className="flex items-center gap-1.5 text-xs">
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ background: COLORS[i] }}
              />
              <span className="text-muted-foreground">{s.name}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Segment detail cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="lg:col-span-2 grid grid-cols-2 md:grid-cols-5 gap-3"
      >
        {segmentData.map((seg, i) => (
          <div
            key={seg.name}
            className="bg-card border border-border rounded-xl p-4 hover:shadow-md transition-shadow"
          >
            <div
              className="w-3 h-3 rounded-full mb-3"
              style={{ background: COLORS[i] }}
            />
            <p className="text-sm font-bold">{seg.name}</p>
            <p className="text-xs text-muted-foreground mt-1">
              {seg.count.toLocaleString()} customers
            </p>
            <div className="mt-3 space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Revenue</span>
                <span className="font-semibold">{seg.pctRevenue}%</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Avg Value</span>
                <span className="font-semibold">
                  ${seg.avgRevenue.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Frequency</span>
                <span className="font-semibold">
                  {seg.avgFrequency.toFixed(1)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
