var maxProfit = function(prices) {
    let lowestPrice = prices[0];
    let diff = 0;
    for(let i=1; prices.length > i; i++){
    lowestPrice = Math.min(lowestPrice, prices[i]);
    diff = Math.max(diff, prices[i] - lowestPrice);
    }
    return diff;
    };