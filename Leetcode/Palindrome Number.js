var isPalindrome = function(x) {
    const p = String(x).split('').reverse().join('');
    const pp = parseInt(p);
    let result;
    if(pp === x){
        result = true;
    }else{
        result = false;
    }
    return result;
};