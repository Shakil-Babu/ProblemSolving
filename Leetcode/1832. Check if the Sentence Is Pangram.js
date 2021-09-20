//1832. Check if the Sentence Is Pangram
var checkIfPangram = function(sentence) {
    let arr = new Set([...sentence.split('').sort()]);
    return [...arr].length === 26 ? true : false ;
};
