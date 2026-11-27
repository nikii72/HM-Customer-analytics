import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroHeader from "@/components/dashboard/HeroHeader";
import KPICards from "@/components/dashboard/KPICards";
import InsightsSection from "@/components/dashboard/InsightsSection";
import OverviewSection from "@/components/dashboard/OverviewSection";
import SalesTrendsSection from "@/components/dashboard/SalesTrendsSection";
import CustomerInsightsSection from "@/components/dashboard/CustomerInsightsSection";
import ProductPerformanceSection from "@/components/dashboard/ProductPerformanceSection";
import ChannelAnalysisSection from "@/components/dashboard/ChannelAnalysisSection";
import ModelPerformanceSection from "@/components/dashboard/ModelPerformanceSection";
import RecommendationsSection from "@/components/dashboard/RecommendationsSection";

const tabs = [
  { id: "overview",         label: "Overview" },
  { id: "sales",            label: "Sales Trends" },
  { id: "customers",        label: "Customer Insights" },
  { id: "products",         label: "Product Performance" },
  { id: "channels",         label: "Channel Analysis" },
  { id: "models",           label: "Model Performance" },
  { id: "recommendations",  label: "Recommendations" },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-background font-inter">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-6 md:py-10">
        <HeroHeader />
        <KPICards />

        {/* Insights strip */}
        <div className="mb-8">
          <InsightsSection />
        </div>

        {/* Tab navigation */}
        <div className="mb-8 overflow-x-auto">
          <div
            className="flex gap-1 rounded-xl p-1 min-w-max"
            style={{
              background: "rgba(255,255,255,0.75)",
              border: "1px solid rgba(0,0,0,0.08)",
              backdropFilter: "blur(12px)",
              boxShadow:
                "0 4px 24px rgba(0,0,0,0.07), 0 1px 0 rgba(255,255,255,0.9) inset",
            }}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 md:px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
                  activeTab === tab.id
                    ? "text-white"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-lg"
                    style={{
                      background:
                        "linear-gradient(135deg, #E50010 0%, #a0000b 100%)",
                    }}
                    transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "overview"        && <OverviewSection />}
            {activeTab === "sales"           && <SalesTrendsSection />}
            {activeTab === "customers"       && <CustomerInsightsSection />}
            {activeTab === "products"        && <ProductPerformanceSection />}
            {activeTab === "channels"        && <ChannelAnalysisSection />}
            {activeTab === "models"          && <ModelPerformanceSection />}
            {activeTab === "recommendations" && <RecommendationsSection />}
          </motion.div>
        </AnimatePresence>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-16 pb-8 flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-6"
        >
          <span>H&amp;M Fashion Retail Intelligence Dashboard</span>
          <span>Based on 3.1M+ transactions · 688K+ customers</span>
        </motion.div>
      </div>
    </div>
  );
}
