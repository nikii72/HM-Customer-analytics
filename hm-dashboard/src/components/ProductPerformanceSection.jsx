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
import { categoryData, priceTierData } from "@/lib/dashboardData";

const TIER_COLORS = [
  "hsl(0,0%,82%)",
  "hsl(0,0%,60%)",
  "hsl(0,0%,35%)",
  "hsl(355,100%,45%)",
];

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div className="bg-primary text-primary-foreground px-4 py-2.5 rounded-lg shadow-xl text-sm">
      <p className="font-bold mb-1">{d.name || d.tier}</p>
      <p className="text-primary-foreground/80">
        Revenue: ${d.revenue?.toLocaleString()}
      </p>
      {d.transactions && (
        <p className="text-primary-foreground/80">
          Transactions: {d.transactions?.toLocaleString()}
        </p>
      )}
      {d.share && (
        <p className="text-primary-foreground/80">Share: {d.share}%</p>
      )}
    </div>
  );
};

export default function ProductPerformanceSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Top Categories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="lg:col-span-2 bg-card border border-border rounded-xl p-6"
      >
        <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-1">
          Top Categories
        </h3>
        <p className="text-2xl font-bold mb-6">Revenue by Product Category</p>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={categoryData}
              layout="vertical"
              margin={{ top: 0, right: 10, left: 0, bottom: 0 }}
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
                tick={{ fontSize: 11, fill: "hsl(0,0%,20%)" }}
                axisLine={false}
                tickLine={false}
                width={130}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar
                dataKey="revenue"
                fill="hsla(0, 100%, 44%, 0.93)"
                radius={[0, 4, 4, 0]}
                animationDuration={1200}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Price Tiers */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="bg-card border border-border rounded-xl p-6"
      >
        <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-1">
          Price Tiers
        </h3>
        <p className="text-2xl font-bold mb-6">Revenue Share</p>
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={priceTierData}
                dataKey="revenue"
                nameKey="tier"
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={85}
                paddingAngle={3}
                animationDuration={1200}
              >
                {priceTierData.map((_, i) => (
                  <Cell key={i} fill={TIER_COLORS[i]} />
                ))}
              </Pie>
              <Tooltip
                formatter={(val) => [`$${val.toLocaleString()}`]}
                contentStyle={{
                  background: "hsl(0, 100%, 58%)",
                  border: "none",
                  borderRadius: 8,
                  color: "white",
                  fontSize: 13,
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="space-y-2 mt-4">
          {priceTierData.map((t, i) => (
            <div
              key={t.tier}
              className="flex items-center justify-between text-sm"
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ background: TIER_COLORS[i] }}
                />
                <span>{t.tier}</span>
              </div>
              <span className="font-semibold">{t.share}%</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
