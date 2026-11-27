import { motion } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
} from "recharts";
import { recommendations, businessImpact } from "@/lib/dashboardData";
import { ArrowUpRight, TrendingUp } from "lucide-react";

const priorityStyles = {
  High:   "bg-accent/10 text-accent border-accent/20",
  Medium: "bg-primary/5 text-primary border-primary/10",
  Low:    "bg-muted text-muted-foreground border-border",
};

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div className="bg-primary text-primary-foreground px-4 py-2.5 rounded-lg shadow-xl text-sm">
      <p className="font-bold mb-1">{d.initiative}</p>
      <p className="text-primary-foreground/80">Investment: ${d.investment.toLocaleString()}</p>
      <p className="text-primary-foreground/80">Revenue: ${d.revenueImpact.toLocaleString()}</p>
      <p className="text-primary-foreground/80">ROI: {d.roi.toFixed(0)}%</p>
    </div>
  );
};

export default function RecommendationsSection() {
  return (
    <div className="space-y-6">
      {/* Business Impact chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-card border border-border rounded-xl p-6"
      >
        <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-1">
          Business Impact
        </h3>
        <p className="text-2xl font-bold mb-6">Investment vs Revenue Impact</p>
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={businessImpact} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
              <XAxis
                dataKey="initiative"
                tick={{ fontSize: 10, fill: "hsl(0,0%,40%)" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 10, fill: "hsl(0,0%,40%)" }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar
                dataKey="investment"
                name="Investment"
                fill="hsl(0,0%,75%)"
                radius={[4, 4, 0, 0]}
                animationDuration={1200}
              />
              <Bar
                dataKey="revenueImpact"
                name="Revenue"
                fill="hsl(355,100%,45%)"
                radius={[4, 4, 0, 0]}
                animationDuration={1200}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Recommendation cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recommendations.map((rec, i) => (
          <motion.div
            key={rec.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            whileHover={{ y: -3, transition: { duration: 0.15 } }}
            className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-all group"
          >
            <div className="flex items-start justify-between mb-3">
              <span
                className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border ${
                  priorityStyles[rec.priority]
                }`}
              >
                {rec.priority}
              </span>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
            </div>
            <p className="font-bold text-base mb-1">{rec.title}</p>
            <p className="text-xs text-muted-foreground mb-3">{rec.category}</p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              {rec.description}
            </p>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-accent">
              <TrendingUp className="w-3.5 h-3.5" />
              {rec.impact}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
