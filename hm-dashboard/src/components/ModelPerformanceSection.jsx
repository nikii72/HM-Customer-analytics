import { motion } from "framer-motion";
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { modelPerformance } from "@/lib/dashboardData";
import { Brain, Cpu, TrendingUp, Award } from "lucide-react";

const rf = modelPerformance.randomForest;
const lr = modelPerformance.logisticRegression;

const rfMetrics = [
  { metric: "Accuracy", value: rf.accuracy * 100 },
  { metric: "Precision", value: rf.precision * 100 },
  { metric: "Recall", value: rf.recall * 100 },
  { metric: "F1 Score", value: rf.f1 * 100 },
  { metric: "ROC-AUC", value: rf.rocAuc * 100 },
];

const lrMetrics = [
  { metric: "Accuracy", value: lr.accuracy * 100 },
  { metric: "Precision", value: lr.precision * 100 },
  { metric: "Recall", value: lr.recall * 100 },
  { metric: "F1 Score", value: lr.f1 * 100 },
  { metric: "ROC-AUC", value: lr.rocAuc * 100 },
];

const radarData = rfMetrics.map((m, i) => ({
  metric: m.metric,
  "Random Forest": m.value,
  "Logistic Regression": lrMetrics[i].value,
}));

const comparisonData = rfMetrics.map((m, i) => ({
  metric: m.metric,
  rf: m.value,
  lr: lrMetrics[i].value,
}));

const glassCard = {
  background: "rgba(255,255,255,0.7)",
  backdropFilter: "blur(16px)",
  border: "1px solid rgba(255,255,255,0.9)",
  boxShadow: "0 8px 32px rgba(0,0,0,0.08), 0 1px 0 rgba(255,255,255,0.8) inset",
};

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div
      className="rounded-xl px-4 py-3 text-sm shadow-2xl"
      style={{
        background: "rgba(20,20,20,0.95)",
        border: "1px solid rgba(229,0,16,0.3)",
        backdropFilter: "blur(12px)",
      }}
    >
      <p className="font-bold text-white mb-1">{label}</p>
      {payload.map((p, i) => (
        <p key={i} style={{ color: p.color }} className="font-mono text-xs">
          {p.name}: {p.value?.toFixed(1)}%
        </p>
      ))}
    </div>
  );
};

function MetricBar({ label, rf, lr }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-xs font-medium text-muted-foreground">
          {label}
        </span>
        <div className="flex gap-3 text-xs font-mono">
          <span style={{ color: "#E50010" }}>{rf.toFixed(1)}%</span>
          <span className="text-muted-foreground">{lr.toFixed(1)}%</span>
        </div>
      </div>
      <div
        className="relative h-2 rounded-full overflow-hidden"
        style={{ background: "rgba(0,0,0,0.08)" }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${lr}%` }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute inset-y-0 left-0 rounded-full"
          style={{ background: "rgba(0,0,0,0.2)" }}
        />
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${rf}%` }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="absolute inset-y-0 left-0 rounded-full"
          style={{ background: "linear-gradient(90deg, #E50010, #ff4d5e)" }}
        />
      </div>
    </div>
  );
}

export default function ModelPerformanceSection() {
  return (
    <div className="space-y-6">
      {/* Hero model cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Random Forest */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -3, transition: { duration: 0.2 } }}
          className="rounded-2xl p-6 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #E50010 0%, #a0000b 100%)",
            boxShadow:
              "0 0 40px rgba(229,0,16,0.25), 0 20px 40px rgba(0,0,0,0.15)",
          }}
        >
          <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full border-2 border-white/10" />
          <div className="absolute -right-2 -bottom-2 w-20 h-20 rounded-full border border-white/10" />
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/20">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-bold text-white text-lg">Random Forest</p>
              <p className="text-white/60 text-xs">
                Ensemble Classifier · Best Model
              </p>
            </div>
            <div className="ml-auto">
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/20 text-white">
                🏆 Winner
              </span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Accuracy", val: rf.accuracy },
              { label: "F1 Score", val: rf.f1 },
              { label: "ROC-AUC", val: rf.rocAuc },
            ].map((m) => (
              <div
                key={m.label}
                className="rounded-xl p-3 text-center"
                style={{ background: "rgba(255,255,255,0.12)" }}
              >
                <p className="text-2xl font-black text-white font-mono">
                  {(m.val * 100).toFixed(1)}%
                </p>
                <p className="text-white/60 text-[9px] uppercase tracking-widest mt-0.5">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Logistic Regression */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ y: -3, transition: { duration: 0.2 } }}
          className="rounded-2xl p-6 relative overflow-hidden"
          style={glassCard}
        >
          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "rgba(0,0,0,0.08)" }}
            >
              <Cpu className="w-5 h-5 text-foreground/70" />
            </div>
            <div>
              <p className="font-bold text-lg">Logistic Regression</p>
              <p className="text-muted-foreground text-xs">
                Linear Classifier · Baseline
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Accuracy", val: lr.accuracy },
              { label: "F1 Score", val: lr.f1 },
              { label: "ROC-AUC", val: lr.rocAuc },
            ].map((m) => (
              <div
                key={m.label}
                className="rounded-xl p-3 text-center bg-muted/40"
              >
                <p className="text-2xl font-black font-mono">
                  {(m.val * 100).toFixed(1)}%
                </p>
                <p className="text-muted-foreground text-[9px] uppercase tracking-widest mt-0.5">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Detailed comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Metric bars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="rounded-2xl p-6"
          style={glassCard}
        >
          <div className="flex items-center gap-2 mb-1">
            <TrendingUp className="w-4 h-4 text-muted-foreground" />
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Metric Comparison
            </h3>
          </div>
          <p className="text-xl font-bold mb-5">All Performance Metrics</p>
          <div className="space-y-4">
            {rfMetrics.map((m, i) => (
              <MetricBar
                key={m.metric}
                label={m.metric}
                rf={m.value}
                lr={lrMetrics[i].value}
              />
            ))}
          </div>
          <div className="flex items-center gap-4 mt-5 pt-4 border-t border-border">
            <div className="flex items-center gap-2">
              <div
                className="w-3 h-1.5 rounded-full"
                style={{ background: "#E50010" }}
              />
              <span className="text-xs text-muted-foreground">
                Random Forest
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-1.5 rounded-full bg-foreground/20" />
              <span className="text-xs text-muted-foreground">
                Logistic Regression
              </span>
            </div>
          </div>
        </motion.div>

        {/* Radar chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-2xl p-6"
          style={glassCard}
        >
          <div className="flex items-center gap-2 mb-1">
            <Award className="w-4 h-4 text-muted-foreground" />
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Radar Overview
            </h3>
          </div>
          <p className="text-xl font-bold mb-4">Performance Spider</p>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart
                data={radarData}
                margin={{ top: 10, right: 20, bottom: 10, left: 20 }}
              >
                <PolarGrid stroke="rgba(0,0,0,0.08)" />
                <PolarAngleAxis
                  dataKey="metric"
                  tick={{ fontSize: 10, fill: "hsl(0,0%,42%)" }}
                />
                <Radar
                  name="Random Forest"
                  dataKey="Random Forest"
                  stroke="#E50010"
                  fill="#E50010"
                  fillOpacity={0.18}
                  strokeWidth={2}
                />
                <Radar
                  name="Logistic Regression"
                  dataKey="Logistic Regression"
                  stroke="hsl(0,0%,40%)"
                  fill="hsl(0,0%,40%)"
                  fillOpacity={0.08}
                  strokeWidth={1.5}
                  strokeDasharray="4 4"
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-2">
              <div
                className="w-3 h-1.5 rounded-full"
                style={{ background: "#E50010" }}
              />
              <span className="text-xs text-muted-foreground">
                Random Forest
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-1.5 rounded-full bg-foreground/30" />
              <span className="text-xs text-muted-foreground">
                Logistic Regression
              </span>
            </div>
          </div>
        </motion.div>

        {/* Bar chart comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="rounded-2xl p-6"
          style={glassCard}
        >
          <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
            Side-by-Side
          </h3>
          <p className="text-xl font-bold mb-6">Model Metrics Comparison</p>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={comparisonData}
                margin={{ top: 5, right: 10, left: 0, bottom: 0 }}
              >
                <XAxis
                  dataKey="metric"
                  tick={{ fontSize: 11, fill: "hsl(0,0%,42%)" }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  domain={[60, 100]}
                  tick={{ fontSize: 10, fill: "hsl(0,0%,42%)" }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v) => `${v}%`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar
                  dataKey="rf"
                  name="Random Forest"
                  fill="#E50010"
                  radius={[5, 5, 0, 0]}
                  animationDuration={1200}
                />
                <Bar
                  dataKey="lr"
                  name="Logistic Regression"
                  fill="hsl(0,0%,70%)"
                  radius={[5, 5, 0, 0]}
                  animationDuration={1200}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Insight callout */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="rounded-2xl p-5 flex items-start gap-4"
          style={{
            background:
              "linear-gradient(135deg, rgb(229, 0, 15) 0%, rgba(229,0,16,0.03) 100%)",
            border: "1px solid rgba(229,0,16,0.15)",
          }}
        >
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: "rgb(231, 199, 199)" }}
          >
            <Brain className="w-4 h-4" style={{ color: "#ff0213" }} />
          </div>
          <div>
            <p className="font-bold text-sm mb-1">
              Random Forest outperforms Logistic Regression by +3.8% accuracy
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              The ensemble model achieves <strong>82.3% accuracy</strong> and{" "}
              <strong>89.1% ROC-AUC</strong>, making it the recommended model
              for customer churn prediction. Its superior recall (72.3% vs
              69.5%) ensures fewer at-risk customers are missed — critical for
              retention campaigns.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
