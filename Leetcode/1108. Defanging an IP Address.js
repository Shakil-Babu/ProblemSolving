var defangIPaddr = function(address) {
    let a = address.split("");
    for(let i = 0; i<a.length; i++){
        if(a[i] === '.'){
            a[i] = '[.]';
        }
    }
    return a.join('');
};