var reverseWords = function(s) {
    let arr = s.split(" ");
    let temp = [];
    for(let i = 0; i<arr.length; i++){
        temp.push(arr[i].split("").reverse().join(""));
    }

    return temp.join(" ") ;
};