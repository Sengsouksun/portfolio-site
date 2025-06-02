// Step 1: Create and Initialize Variables
const startupName = "Budget Analytics";
const initialCapital = 50000; // in USD
const monthlyRevenue = 12000;
const monthlyExpenses = 8000;

// Step 2: Calculate Business Metrics
const netCashFlow = monthlyRevenue - monthlyExpenses;
const currentBalance = initialCapital + netCashFlow;
const isProfitable = netCashFlow > 0;

// Step 3: Print to Console
console.log("=== Startup Budget Summary ===");
console.log("Startup Name: " + startupName);
console.log("Net Monthly Cash Flow: $" + netCashFlow);
console.log("Current Balance: $" + currentBalance);
console.log("Profitability Status: " + isProfitable);
