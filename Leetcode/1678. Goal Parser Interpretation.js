// 1678. Goal Parser Interpretation
var interpret = function(command) {
    return command.replace(/\(al\)/g, 'al').replace(/\(\)/g, 'o')
};