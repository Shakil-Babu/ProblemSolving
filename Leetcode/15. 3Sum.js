var program = (arr) => {
    let ans = [];
    for(let i = 0 ; i<arr.length; i++){
        let set = new Set();
        for(let j = i+1; j<arr.length ; j++){
            let x =  - (arr[i] + arr[j]);
            if(set.has(x)){
                ans.push([x,arr[i], arr[j]]);
            }else{
                set.add(arr[j]);
            }
        }
    }
    return ans ;
}

var threeSum = function(nums) {
    let a = program(nums).map((item) => item.sort((a,b) => a-b));
    let stringArray = a.map(JSON.stringify);
    let uniqueStringArray = new Set(stringArray);
    let uniqueArray = Array.from(uniqueStringArray, JSON.parse);

    return uniqueArray;
    
};
let r = threeSum([-1,0,1,2,-1,-4]);
console.log(r);