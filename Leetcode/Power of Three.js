const characterMap = (nums) => {
    let map = {};
    for(let number of nums){
        map[number] ? map[number]++ : map[number] = 1;
    }
    return map ;
}
var containsDuplicate = function(nums) {
    let map = characterMap(nums);
    let ans = false ;
    for(let key in map){
        if(map[key] > 1){
            ans = true;
        }
    }

    return ans;
};