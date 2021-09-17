const characterMap = (nums) => {
    let map = {};
    for(let number of nums){
        map[number] ? map[number]++ : map[number] = 1;
    }
    return map ;
}
var majorityElement = function(nums) {
    let map = characterMap(nums);
    let arr = [];
    for(let key in map){
        arr.push(parseInt(map[key]));
    }

    let max = arr.sort((a,b) => b-a)[0];
    
    let r = '' ;
    for(let key in map){
        if(map[key] == max){
            r = key;
        }
    }

    return r;
    
};