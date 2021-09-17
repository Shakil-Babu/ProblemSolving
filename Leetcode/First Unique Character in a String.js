const characterMap = (str) => {
    const charMap = {};
    for (let char of str) {
      charMap[char] ? charMap[char]++ : (charMap[char] = 1);
    }
  
    return charMap;
};

var firstUniqChar = function(s) {
    let cp = characterMap(s);
    console.log(cp);
    let f = '';
    for(let key in cp){
        if(cp[key] === 1){
            f = key;
            break;
        }
    }
    return s.split("").findIndex((item) => item === f);
};