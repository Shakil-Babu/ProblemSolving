var isPerfectSquare = function(num) {
    let i = 1
    let ans = i*i
    while(ans < num) {
      i++
      ans= i*i
    }
    return ans === num
  };