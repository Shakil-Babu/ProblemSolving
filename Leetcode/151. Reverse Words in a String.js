var reverseWords = function(s) {
    let a = s.trim().split(' ').reverse().filter((item) => item !== '').join(' ');
    return a;
};
