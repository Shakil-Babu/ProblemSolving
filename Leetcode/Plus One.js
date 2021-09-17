var plusOne = function(digits) {  
    let arr = [];
    let r = String(BigInt(digits.join("")) + 1n).split('').map((item) => {
        arr.push(parseInt(item));
    });
    return arr;
  };