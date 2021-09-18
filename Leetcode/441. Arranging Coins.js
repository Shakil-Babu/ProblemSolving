var arrangeCoins = function(n) {
    let result = [], i = 1;
    for(let i =1; i<=n ; i++){
        result.push(i);
        n = n - i ;
    }
    return result.length;
};