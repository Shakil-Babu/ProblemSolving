var longestCommonPrefix = function(strs) {
    let result = strs[0];
    for (let i = 1; i < strs.length; i++) {
      while(!strs[i].startsWith(result)) {
        result = result.substring(0, result.length - 1)
      }
      if(result == "") break;
    }
    return result;
};