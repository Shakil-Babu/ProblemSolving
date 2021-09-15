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
	var average = ((A*3.5 + B*7.5) / (3.5 + 7.5)).toFixed(5); 
	print('MEDIA = '+average)
}