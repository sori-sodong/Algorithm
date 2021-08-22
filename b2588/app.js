const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : "./input.txt";
let input = fs.readFileSync(filePath).toString().split('/n');

const firstNum = input[0];
const secondNum = input[1];

console.log(secondNum);

