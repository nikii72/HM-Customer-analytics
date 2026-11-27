import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { smartInsights } from "@/lib/dashboardData";

export default function InsightsSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-2 mb-5">
        <Sparkles className="w-5 h-5 text-accent" />
        <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Smart Insights
        </h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {smartInsights.map((insight, i) => (
          <motion.div
            key={insight.label}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            whileHover={{ y: -2, transition: { duration: 0.15 } }}
            className="bg-card border border-border rounded-xl p-4 hover:shadow-md transition-all"
          >
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-1.5">
              {insight.label}
            </p>
            <p className="text-lg font-bold leading-tight">{insight.value}</p>
            <p className="text-[11px] text-muted-foreground mt-1">{insight.detail}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
