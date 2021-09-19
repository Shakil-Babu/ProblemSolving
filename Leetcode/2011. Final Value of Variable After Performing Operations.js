var finalValueAfterOperations = function(operations) {
    let ans = 0;
    for(let i = 0; i<operations.length; i++){
        let it = operations[i].toUpperCase();
        it === "++X" ? ++ans : it === "X++" ? ans++ : it === "--X" ? --ans : ans-- ;
    } 
    return ans ;
};