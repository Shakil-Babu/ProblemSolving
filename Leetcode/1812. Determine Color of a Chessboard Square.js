
var squareIsWhite = function(coordinates) {
    let arr = coordinates.split('');
    let f = arr[0], l = arr[1];

    let odd = [], even = [];
    for(let i = 1; i<=8; i++){
        if(f === 'a' || f === 'c' || f=== 'e' || f==='g'){
            if(i%2 === 1){
                odd.push(i);
            }
        };

        if(f === 'b' || f === 'd' || f=== 'f' || f==='h'){
            if(i%2 === 0){
                even.push(i);
            }
        }
    }

    if(odd.includes(parseInt(l)) || even.includes(parseInt(l))){
        return false ;
    }else {
        return true;
    }
};