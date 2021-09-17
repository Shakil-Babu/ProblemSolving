const reversePrefix = (s, ch) => {
    let idx = s.indexOf(ch);
    let left = s.slice(0, idx + 1);
    let right = s.slice(idx + 1);
    return reverse(left) + right;
};

const reverse = (s) => {
    let res = "";
    for (let i = s.length - 1; i >= 0; i--) {
        res += s[i];
    }
    return res;
};