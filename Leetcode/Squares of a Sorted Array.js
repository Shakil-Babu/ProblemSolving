var sortedSquares = function(nums) {
    let squre = nums.map((item) => item*item).sort((a,b) => a-b);
    return squre;
};


/*

// 2nd solution
var sortedSquares = function(nums){
    let squre = nums.map((item) => item * item);
    for(let i = 0; i<= squre.length; i++){
        for(let j = i+1; j<= squre.length; j++){
            if(squre[i] > squre[j]){
                [squre[i], squre[j]] = [squre[j], squre[i]];
            }
        }
    }
    return squre; 
}



*/