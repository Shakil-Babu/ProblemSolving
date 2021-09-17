var isValid = function(s) {
    const arr = [];
    const obj = {
    "{" : "}",
    "[": "]",
    "(": ")"
    }
  for(let i = 0; i < s.length; i++){
    if(obj.hasOwnProperty(s[i])){
      arr.push(s[i])
    }else {
      if(obj[arr[arr.length - 1]] == s[i]) {
        arr.pop()
      }else {
        return false;
      }
    }   
  }
    
    return arr.length == 0 ? true : false
};