// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    var R = Math.floor(B/K);
    var R1 = Math.floor(A/K)
    return  R - R1 + (A % K == 0 ? 1: 0);
}
