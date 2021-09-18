var isSubsequence = function(s, t) {
    let str = s.split("");
    let temp = 0;
    let str1 = t.split("").map((item,index) => {
        if(item == str[temp]){
            temp++;
        }
    })

    if(temp === str.length){
        return true ;
    }else{
        return false;
    }
};