var restoreString = function(s, indices) {
    let arr = s.split("");
    let a = [];
    for(let i = 0; i<indices.length; i++){
        a[indices[i]] = arr[i];
    }

    return a.join("");
};