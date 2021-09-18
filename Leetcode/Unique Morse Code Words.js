var uniqueMorseRepresentations = function(words) {
    let t = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let temp = [];
    let r = words.map((item, index) => {
        let str = '';
        item.split("").map((item,index) => {
            str += t[item.charCodeAt() - 97];
        })
        temp.push(str);
    });

    return [...new Set(temp)].length;
};