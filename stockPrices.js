const best = prices => {
    let bestProfit = 0;
    let min = prices[0]

    for(let i = 0; i < prices.length; ++i) {
        if(prices[i] < min) {
            min = prices;
        }

        let diff = prices[i] - min;

        if(diff > bestProfit) {
            bestProfit = diff;
        }
    }
    
    console.log(bestProfit);
    return bestProfit;
}

best([1,2,3,4,5]);
best([2,3,10,6,4,8,1]);
best([7,9,5,6,3,2]);
best([0,100]);
best([5,3,2,1]);