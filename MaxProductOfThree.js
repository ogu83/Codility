/ you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A.sort(function(a, b) { return b - a; } );
    //console.log(A);
    var left = A[0] * A[1] *A[2];
    var right = A[A.length-1]*A[A.length-2]*A[0];
    return Math.max(left,right);
}
