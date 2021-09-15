"use strict";
process.stdin.resume();
process.stdin.setEncoding("utf-8");
function print(x) {
console.log(x);
}
let inputString = "";
let currentLine = 0;
process.stdin.on("data", (inputStdin) => {
inputString += inputStdin;
});
process.stdin.on("end", () => {
inputString = inputString.split("\n");
main();
});
function readline() {
return inputString[currentLine++];
}
// ************************ Code Start ***************************
function main() {
var A=parseInt(readline());
var B=parseInt(readline())
var C=parseFloat(readline())
print('NUMBER = '+A);
var result = (B*C).toFixed(2);
print('SALARY = U$ '+result)
}