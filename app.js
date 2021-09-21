
const cmap = (strs) => {
  
  let temp = [];
  let ans = [];

  for(let i = 0; i<strs.length; i++){
    for(let j = i+1; j<strs.length; j++){
      if(strs[i].split('').sort().join('') === strs[j].split('').sort().join('')){
          temp.push([strs[i], strs[j]])
      }
    }
  }

  return temp;
}

var groupAnagrams = function(strs) {
  if(strs.length <= 1) return [strs];  
  let call = cmap(strs);

  return call;

};
let res = groupAnagrams( ["eat","tea","tan","ate","nat","bat"]);
console.log(res);

