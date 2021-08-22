import { readFileSync } from "fs";
const filePath = process.platform === 'linux' ? '/dev/stdin' : "./input.txt";
let input = readFileSync(filePath).toString().split('/n');

input = input[0];
input = input.split(' ').map((item) => Number(item));

solution (input[0], input[1]);

function solution(a,b) {
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(parseInt(a/b));
    console.log(a%b);
}
//console.log(input);