// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var missing = 1;
    A.sort(function(a,b){return a - b;});
    //console.log(A);
    for (var i = 0; i < A.length; i++) {
        if (missing == A[i]) {
            missing++;
        }
    }
    return missing;
}
