import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  DollarSign,
  ShoppingCart,
  Users,
  BarChart3,
  TrendingUp,
} from "lucide-react";
import { kpiData } from "@/lib/dashboardData";

function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1500,
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        setDisplay(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [value, duration]);

  const formatted =
    decimals > 0
      ? display.toFixed(decimals)
      : Math.floor(display).toLocaleString();

  return (
    <span>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

const cards = [
  {
    title: "Total Revenue",
    value: kpiData.totalRevenue,
    prefix: "$",
    decimals: 0,
    icon: DollarSign,
    accent: true,
  },
  {
    title: "Transactions",
    value: kpiData.totalTransactions,
    icon: ShoppingCart,
  },
  { title: "Unique Customers", value: kpiData.uniqueCustomers, icon: Users },
  {
    title: "Avg Order Value",
    value: kpiData.avgOrderValue,
    prefix: "$",
    decimals: 4,
    icon: BarChart3,
  },
  {
    title: "Rev / Customer",
    value: kpiData.revenuePerCustomer,
    prefix: "$",
    decimals: 2,
    icon: TrendingUp,
  },
];

// Each card floats at a slightly different speed and distance so they feel independent
const floatVariants = [
  { y: [0, -7, 0], duration: 3.8 },
  { y: [0, -5, 0], duration: 4.4 },
  { y: [0, -8, 0], duration: 3.5 },
  { y: [0, -6, 0], duration: 4.8 },
  { y: [0, -5, 0], duration: 4.1 },
];

export default function KPICards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
      {cards.map((card, i) => (
        <motion.div
          key={card.title}
          // Entry animation
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: 1,
            y: floatVariants[i].y, // float takes over after entry
          }}
          transition={{
            opacity: { duration: 0.5, delay: i * 0.1 },
            y: {
              // First: slide up into place (entry)
              // Then: loop the float
              times: [0, 0.5, 1],
              duration: floatVariants[i].duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.18, // stagger the float start so cards don't move in sync
            },
          }}
          // Hover: pause float, lift a bit more + glow
          whileHover={{
            y: -10,
            scale: 1.04,
            boxShadow: card.accent
              ? "0 12px 40px rgba(229,0,16,0.45), 0 4px 16px rgba(0,0,0,0.3)"
              : "0 12px 32px rgba(0,0,0,0.12), 0 0 0 1.5px rgba(229,0,16,0.4)",
            transition: { duration: 0.22, ease: "easeOut" },
          }}
          className={`group relative overflow-hidden rounded-xl p-5 border transition-all duration-300 ${
            card.accent
              ? "text-white border-transparent"
              : "bg-card text-card-foreground border-border"
          }`}
          style={
            card.accent
              ? {
                  background:
                    "linear-gradient(135deg, #E50010 0%, #a0000b 100%)",
                }
              : {}
          }
        >
          {/* Shimmer sweep on hover (accent card only) */}
          {card.accent && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.12) 50%, transparent 65%)",
                backgroundSize: "200% 100%",
              }}
              initial={{ backgroundPosition: "200% 0" }}
              whileHover={{ backgroundPosition: "-200% 0" }}
              transition={{ duration: 0.55, ease: "easeInOut" }}
            />
          )}

          {/* Subtle red glow blob that drifts — non-accent cards */}
          {!card.accent && (
            <motion.div
              className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full pointer-events-none opacity-0 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(circle, rgba(229,0,16,0.12), transparent)",
              }}
              transition={{ duration: 0.3 }}
            />
          )}

          <div className="flex items-center justify-between mb-3">
            <span
              className={`text-xs font-medium uppercase tracking-widest ${
                card.accent ? "text-white/70" : "text-muted-foreground"
              }`}
            >
              {card.title}
            </span>

            {/* Icon — spins once on hover */}
            <motion.div
              whileHover={{ rotate: 15, scale: 1.2 }}
              transition={{ duration: 0.2 }}
            >
              <card.icon
                className={`w-4 h-4 ${card.accent ? "text-white/50" : "text-accent/50"}`}
              />
            </motion.div>
          </div>

          <div className="text-2xl md:text-3xl font-bold tracking-tight">
            <AnimatedNumber
              value={card.value}
              prefix={card.prefix || ""}
              decimals={card.decimals || 0}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
