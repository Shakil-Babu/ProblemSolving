var kidsWithCandies = function(candies, extraCandies) {
    let largeNumber = Math.max(...candies);
    let ans = [];
    for(let i = 0; i<candies.length; i++){
        if(candies[i] + extraCandies >= largeNumber) ans.push(true)
        else ans.push(false);
    }
    return ans;
};