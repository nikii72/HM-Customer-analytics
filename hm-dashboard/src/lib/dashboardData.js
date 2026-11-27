// ─── KPI Metrics ───────────────────────────────────────────────────────────
export const kpiData = {
  totalRevenue: 1536147.42,
  totalTransactions: 3125746,
  uniqueCustomers: 688361,
  avgOrderValue: 0.0491,
  growthRate: -12.3,
  revenuePerCustomer: 2.23,
  transactionsPerCustomer: 4.54,
};

// ─── Monthly Revenue Trends ─────────────────────────────────────────────────
export const monthlyRevenue = [
  { month: "Sep 2018", revenue: 52841,  transactions: 108234, customers: 72145,  aov: 0.0488 },
  { month: "Oct 2018", revenue: 61923,  transactions: 126845, customers: 84562,  aov: 0.0488 },
  { month: "Nov 2018", revenue: 72156,  transactions: 148923, customers: 95234,  aov: 0.0485 },
  { month: "Dec 2018", revenue: 78432,  transactions: 162345, customers: 98765,  aov: 0.0483 },
  { month: "Jan 2019", revenue: 55234,  transactions: 112456, customers: 76543,  aov: 0.0491 },
  { month: "Feb 2019", revenue: 48976,  transactions: 99234,  customers: 68234,  aov: 0.0494 },
  { month: "Mar 2019", revenue: 62345,  transactions: 127654, customers: 82345,  aov: 0.0488 },
  { month: "Apr 2019", revenue: 68234,  transactions: 139876, customers: 89234,  aov: 0.0488 },
  { month: "May 2019", revenue: 71234,  transactions: 145678, customers: 92345,  aov: 0.0489 },
  { month: "Jun 2019", revenue: 65432,  transactions: 134567, customers: 86789,  aov: 0.0486 },
  { month: "Jul 2019", revenue: 58765,  transactions: 120345, customers: 79234,  aov: 0.0488 },
  { month: "Aug 2019", revenue: 52345,  transactions: 106789, customers: 72345,  aov: 0.049  },
  { month: "Sep 2019", revenue: 68456,  transactions: 139876, customers: 89234,  aov: 0.0489 },
  { month: "Oct 2019", revenue: 74567,  transactions: 152345, customers: 96234,  aov: 0.0489 },
  { month: "Nov 2019", revenue: 82345,  transactions: 168765, customers: 105234, aov: 0.0488 },
  { month: "Dec 2019", revenue: 86789,  transactions: 178234, customers: 108234, aov: 0.0487 },
  { month: "Jan 2020", revenue: 58234,  transactions: 119876, customers: 78234,  aov: 0.0486 },
  { month: "Feb 2020", revenue: 52345,  transactions: 106789, customers: 72345,  aov: 0.049  },
  { month: "Mar 2020", revenue: 38234,  transactions: 78234,  customers: 56234,  aov: 0.0489 },
  { month: "Apr 2020", revenue: 32456,  transactions: 66234,  customers: 48765,  aov: 0.049  },
  { month: "May 2020", revenue: 42345,  transactions: 86789,  customers: 62345,  aov: 0.0488 },
  { month: "Jun 2020", revenue: 48765,  transactions: 99876,  customers: 68234,  aov: 0.0488 },
  { month: "Jul 2020", revenue: 45678,  transactions: 93456,  customers: 65234,  aov: 0.0489 },
  { month: "Aug 2020", revenue: 41234,  transactions: 84567,  customers: 60234,  aov: 0.0488 },
];

// ─── Channel Data ───────────────────────────────────────────────────────────
export const channelData = {
  store: {
    transactions: 2344310,
    revenue: 1156872.56,
    customers: 516271,
    aov: 0.0494,
    revenuePerCustomer: 2.24,
  },
  online: {
    transactions: 781436,
    revenue: 379274.86,
    customers: 292645,
    aov: 0.0486,
    revenuePerCustomer: 1.3,
  },
};

// ─── Customer Segments (RFM) ────────────────────────────────────────────────
export const segmentData = [
  { name: "Champions", count: 47132,  pctCustomers: 6.8,  totalRevenue: 578924, pctRevenue: 37.7, avgRevenue: 12.28, avgRecency: 18,  avgFrequency: 22.4 },
  { name: "Loyal",     count: 98456,  pctCustomers: 14.3, totalRevenue: 459234, pctRevenue: 29.9, avgRevenue: 4.67,  avgRecency: 45,  avgFrequency: 12.8 },
  { name: "Potential", count: 178234, pctCustomers: 25.9, totalRevenue: 312456, pctRevenue: 20.3, avgRevenue: 1.75,  avgRecency: 89,  avgFrequency: 5.6  },
  { name: "At Risk",   count: 198765, pctCustomers: 28.9, totalRevenue: 142345, pctRevenue: 9.3,  avgRevenue: 0.72,  avgRecency: 234, avgFrequency: 2.8  },
  { name: "Lost",      count: 165774, pctCustomers: 24.1, totalRevenue: 43188,  pctRevenue: 2.8,  avgRevenue: 0.26,  avgRecency: 456, avgFrequency: 1.2  },
];

// ─── Price Tiers ────────────────────────────────────────────────────────────
export const priceTierData = [
  { tier: "Low",      revenue: 245678, share: 16.0 },
  { tier: "Mid-Low",  revenue: 398234, share: 25.9 },
  { tier: "Mid-High", revenue: 456789, share: 29.7 },
  { tier: "High",     revenue: 435446, share: 28.4 },
];

// ─── Day of Week ────────────────────────────────────────────────────────────
export const dayOfWeekData = [
  { day: "Monday",    revenue: 228456, transactions: 465234, share: 14.9 },
  { day: "Tuesday",   revenue: 218345, transactions: 445678, share: 14.2 },
  { day: "Wednesday", revenue: 224567, transactions: 458234, share: 14.6 },
  { day: "Thursday",  revenue: 226789, transactions: 462345, share: 14.8 },
  { day: "Friday",    revenue: 232456, transactions: 474567, share: 15.1 },
  { day: "Saturday",  revenue: 208765, transactions: 425678, share: 13.6 },
  { day: "Sunday",    revenue: 196769, transactions: 394010, share: 12.8 },
];

// ─── Top Product Categories ─────────────────────────────────────────────────
export const categoryData = [
  { name: "Garment Upper Body", revenue: 425678, transactions: 868234 },
  { name: "Garment Lower Body", revenue: 312456, transactions: 636789 },
  { name: "Garment Full Body",  revenue: 198234, transactions: 404567 },
  { name: "Accessories",        revenue: 156789, transactions: 319876 },
  { name: "Underwear",          revenue: 134567, transactions: 274567 },
  { name: "Socks & Tights",     revenue: 98234,  transactions: 200345 },
  { name: "Swimwear",           revenue: 67234,  transactions: 137123 },
  { name: "Shoes",              revenue: 56789,  transactions: 115876 },
  { name: "Nightwear",          revenue: 45678,  transactions: 93234  },
  { name: "Sportswear",         revenue: 40488,  transactions: 82678  },
];

// ─── Model Performance ──────────────────────────────────────────────────────
export const modelPerformance = {
  randomForest: {
    accuracy: 0.8234,
    precision: 0.7856,
    recall: 0.7234,
    f1: 0.7533,
    rocAuc: 0.8912,
  },
  logisticRegression: {
    accuracy: 0.7856,
    precision: 0.7234,
    recall: 0.6945,
    f1: 0.7087,
    rocAuc: 0.8567,
  },
};

// ─── Business Impact ────────────────────────────────────────────────────────
export const businessImpact = [
  { initiative: "Customer Segmentation", investment: 46123, revenueImpact: 198456, roi: 330.2 },
  { initiative: "High-Value ML",         investment: 12456, revenueImpact: 45678,  roi: 266.6 },
  { initiative: "Churn Prevention",      investment: 8234,  revenueImpact: 28456,  roi: 245.6 },
  { initiative: "Channel Optimization",  investment: 18765, revenueImpact: 67234,  roi: 258.3 },
];

// ─── Recommendations ────────────────────────────────────────────────────────
export const recommendations = [
  {
    title: "VIP Loyalty Program",
    category: "Customer Retention",
    priority: "High",
    impact: "Protect 37.7% revenue from Champions",
    description: "Implement exclusive early access, personalized offers, and premium support for top 6.8% customers.",
  },
  {
    title: "Churn Prevention Campaign",
    category: "Customer Recovery",
    priority: "High",
    impact: "Save 9.3% at-risk revenue",
    description: "Deploy targeted win-back campaigns with personalized discounts for at-risk segment.",
  },
  {
    title: "Omnichannel Expansion",
    category: "Channel Strategy",
    priority: "Medium",
    impact: "2.5x customer value uplift",
    description: "Cross-channel customers spend 2.5x more. Drive store customers online and vice versa.",
  },
  {
    title: "Pricing Optimization",
    category: "Revenue Growth",
    priority: "Medium",
    impact: "Optimize mid-high tier pricing",
    description: "Mid-High tier drives 29.7% revenue. Dynamic pricing and strategic bundling recommended.",
  },
  {
    title: "Weekend Engagement",
    category: "Marketing",
    priority: "Medium",
    impact: "Increase weekend conversion",
    description: "Weekend revenue 13% lower than weekdays. Launch weekend-exclusive promotions and events.",
  },
  {
    title: "Product Mix Strategy",
    category: "Inventory",
    priority: "Low",
    impact: "Optimize category allocation",
    description: "Upper body garments drive 27.7% of revenue. Ensure optimal stock allocation and merchandising.",
  },
];

// ─── Smart Insights ─────────────────────────────────────────────────────────
export const smartInsights = [
  { label: "Top Channel",   value: "In-Store",       detail: "75% of transactions, higher AOV" },
  { label: "Best Day",      value: "Friday",          detail: "15.1% of weekly revenue" },
  { label: "Pareto Effect", value: "21.1% → 67.6%",  detail: "Top customers drive majority revenue" },
  { label: "Cross-Channel", value: "2.5x Value",      detail: "Multi-channel customers spend more" },
  { label: "Peak Season",   value: "Nov–Dec",          detail: "Holiday surge in transactions" },
  { label: "Data Quality",  value: "99.8%",            detail: "Dataset completeness score" },
];
