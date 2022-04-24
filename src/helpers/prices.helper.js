const SummonsCosts = [
    { generation: 0, baseCost: 6, increment: 2, maxCost: 30 },
    { generation: 1, baseCost: 16, increment: 2, maxCost: 34 },
    { generation: 2, baseCost: 26, increment: 2, maxCost: 42 },
    { generation: 3, baseCost: 36, increment: 2, maxCost: 50 },
    { generation: 4, baseCost: 46, increment: 2, maxCost: 58 },
    { generation: 5, baseCost: 56, increment: 2, maxCost: 66 },
    { generation: 6, baseCost: 66, increment: 2, maxCost: 74 },
    { generation: 7, baseCost: 76, increment: 2, maxCost: 82 },
    { generation: 8, baseCost: 86, increment: 2, maxCost: 90 },
    { generation: 9, baseCost: 96, increment: 2, maxCost: 98 },
    { generation: 10, baseCost: 106, increment: 2, maxCost: 106 }
]

export const calcuateSummonCost = ({ generation, summons, maxSummons }) => {
    if (generation < 0 || generation > 10) return '?'
    
    const tier = SummonsCosts[generation]

    // Gen0s have price cap
    if (summons >= maxSummons) return tier.maxCost

    return tier.baseCost + (summons * tier.increment)
}