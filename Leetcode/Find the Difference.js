const characterMap = (str) => {
    const charMap = {};
    for (let char of str) {
      charMap[char] ? charMap[char]++ : (charMap[char] = 1);
    }
  
    return charMap;
};
var findTheDifference = function(s, t) {
    let for_s = characterMap(s);
    let for_t = characterMap(t);

    let char = '';

    for(let key in for_s){
        if(for_s[key] !== for_t[key]){
            char = key;
        }
    }

    let str1 = s.split('');
    let str = t.split("").map((item) => {
        if(!str1.includes(item)){
            char = item ;
        }
    })
    return char;
};