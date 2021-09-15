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
var A=parseFloat(readline())
	var B=parseFloat(readline())
	var C=parseFloat(readline())
	var average = ((A*2 + B*3 + C*5) / (2+3+5)).toFixed(1);
	print('MEDIA = '+average)
}