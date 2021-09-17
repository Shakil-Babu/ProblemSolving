var trailingZeroes = function(n) {
    var ans = 0;
    for (var i = n; i > 0; i = Math.floor(i/5)) {
        ans += Math.floor(i/5);
    }
    return ans;
};