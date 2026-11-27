import { motion } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
} from "recharts";
import { channelData } from "@/lib/dashboardData";
import { Store, Globe } from "lucide-react";

const comparisonData = [
  {
    metric: "Transactions",
    store: channelData.store.transactions,
    online: channelData.online.transactions,
  },
  {
    metric: "Revenue",
    store: channelData.store.revenue,
    online: channelData.online.revenue,
  },
  {
    metric: "Customers",
    store: channelData.store.customers,
    online: channelData.online.customers,
  },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-primary text-primary-foreground px-4 py-2.5 rounded-lg shadow-xl text-sm">
      <p className="font-bold mb-1">{label}</p>
      {payload.map((p, i) => (
        <p key={i} className="text-primary-foreground/80">
          {p.name}: {p.value?.toLocaleString()}
        </p>
      ))}
    </div>
  );
};

function ChannelCard({ icon: Icon, name, data, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="bg-card border border-border rounded-xl p-6"
    >
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ background: color }}
        >
          <Icon className="w-5 h-5 text-white" />
        </div>
        <div>
          <p className="font-bold text-lg">{name}</p>
          <p className="text-xs text-muted-foreground">Sales Channel</p>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Transactions</span>
          <span className="text-sm font-bold">{data.transactions.toLocaleString()}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Revenue</span>
          <span className="text-sm font-bold">${data.revenue.toLocaleString()}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Customers</span>
          <span className="text-sm font-bold">{data.customers.toLocaleString()}</span>
        </div>
        <div className="h-px bg-border my-2" />
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">AOV</span>
          <span className="text-sm font-bold">${data.aov.toFixed(4)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">Rev/Customer</span>
          <span className="text-sm font-bold">${data.revenuePerCustomer.toFixed(2)}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function ChannelAnalysisSection() {
  const storePct = (
    (channelData.store.transactions /
      (channelData.store.transactions + channelData.online.transactions)) *
    100
  ).toFixed(1);
  const onlinePct = (100 - parseFloat(storePct)).toFixed(1);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ChannelCard
          icon={Store}
          name="In-Store"
          data={channelData.store}
          color="hsl(0,0%,13%)"
        />
        <ChannelCard
          icon={Globe}
          name="Online"
          data={channelData.online}
          color="hsl(355,100%,45%)"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-card border border-border rounded-xl p-6"
      >
        <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-1">
          Channel Split
        </h3>
        <p className="text-2xl font-bold mb-6">Transaction Distribution</p>

        {/* Split bar */}
        <div className="flex rounded-full overflow-hidden h-8 mb-4">
          <div
            className="flex items-center justify-center text-white text-xs font-bold"
            style={{
              width: `${storePct}%`,
              background: "hsl(0,0%,13%)",
            }}
          >
            Store {storePct}%
          </div>
          <div
            className="flex items-center justify-center text-white text-xs font-bold"
            style={{
              width: `${onlinePct}%`,
              background: "hsl(355,100%,45%)",
            }}
          >
            Online {onlinePct}%
          </div>
        </div>

        <div className="h-56 mt-6">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={comparisonData} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
              <XAxis
                dataKey="metric"
                tick={{ fontSize: 12, fill: "hsl(0,0%,20%)" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 10, fill: "hsl(0,0%,40%)" }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v) =>
                  v >= 1000000
                    ? `${(v / 1000000).toFixed(1)}M`
                    : `${(v / 1000).toFixed(0)}k`
                }
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar
                dataKey="store"
                name="Store"
                fill="hsl(0,0%,13%)"
                radius={[4, 4, 0, 0]}
                animationDuration={1200}
              />
              <Bar
                dataKey="online"
                name="Online"
                fill="hsl(355,100%,45%)"
                radius={[4, 4, 0, 0]}
                animationDuration={1200}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  );
}
