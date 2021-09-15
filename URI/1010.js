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
var ar2 = readline().split(' ').map(x => +x);
var code1 = ar2[0], unit1= ar2[1], price1= ar2[2];


var ar3 = readline().split(' ').map(x=> +x);
var code2 = ar3[0], unit2 = ar3[1] , price2 = ar3[2];


var total = ((unit1 * price1) + (unit2 * price2)).toFixed(2);
print('VALOR A PAGAR: R$ '+total);

}