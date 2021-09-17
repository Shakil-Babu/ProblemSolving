
const characterMap = (nums) => {
    let map = {};
    for(let number of nums){
        map[number] ? map[number]++ : map[number] = 1;
    }
    return map ;
}
var singleNumber = function(nums) {
    let map = characterMap(nums);
    let r = null;
    for(let key in map){
        if(map[key] === 1){
            r = key ;
        }
    }
    
    return r;
};