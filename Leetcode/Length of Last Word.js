var lengthOfLastWord = function(s) {
    let arr = [];
    let r = s.split(" ").map((item) => {
        if(item !== ''){
            arr.push(item);
        }
    })

    return arr[arr.length -1].length;
};