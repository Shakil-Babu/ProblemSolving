var countSegments = function(s) {
    let arr = s.split(" ");
    let c = arr.length;
    for(let i = 0; i<arr.length; i++){
        if(arr[i] === ''){
            c--;
        }
    }
    return c;
};
