// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (A.length == 1)
        return A[0];
        
    A.sort();
    while (A.length > 0) {
        var a = A.pop();
        var b = A[A.length-1];
        if (a != b)
            return a;
        A.pop();            
    }
}
