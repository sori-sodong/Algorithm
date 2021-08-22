const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : "./input.txt";
let input = fs.readFileSync(filePath).toString().split('/n');

input = input[0];
input = input.split(' ').map((item) => Number(item));

solution (input[0], input[1], input[2]);

function solution(a,b,c) {
    console.log((a+b)%c);
    console.log(((a%c)+(b%c))%c);
    console.log((a*b)%c);
    console.log(((a%c)*(b%c))%c);
}
//console.log(input);