function calculateZakat(cash, goldValue, silverValue, investments, liabilities, currentNisab) {
    const totalAssets = cash + goldValue + silverValue + investments;
    const netAssets = totalAssets - liabilities;

    if (netAssets >= currentNisab) {
        return netAssets * 0.025; // 2.5% Zakat
    } else {
        return 0; // Below Nisab threshold
    }
}

// Example usage:
const zakatAmount = calculateZakat(10000, 5000, 1000, 2000, 1000, 3000);
console.log(`Zakat Due: ${zakatAmount}`);
