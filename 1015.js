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
var firstLine = readline().split(' ').map((x) => parseFloat(x));
	var x1 = firstLine[0], y1 = firstLine[1];

	var secondLine = readline().split(' ').map((x) => parseFloat(x));
	var x2 = secondLine[0] , y2 = secondLine[1];

	var r =(x2-x1)**2 + (y2-y1)**2;
	var result = Math.sqrt(r).toFixed(4);
	print(result)

}