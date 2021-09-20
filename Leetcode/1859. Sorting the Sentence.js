//1859. Sorting the Sentence
var sortSentence = function(s) {
    let line = s.split(" ").sort((a,b) => a.slice(-1)-b.slice(-1)).map((item) => item.slice(0,item.length-1)).join(' ');
    return line;
};
