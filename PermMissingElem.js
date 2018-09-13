// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (A.length < 1)
        return 1;
    else if (A.length < 2 && A[0] == 2)
        return 1;
    else if (A.length < 2 && A[0] == 1)
        return 2;
    
    var max = Math.max.apply(Math, A);
    var min = Math.min.apply(Math, A);
    if (min > 1)
        return 1;
        
    var sum = (max * (max + 1) - min * (min -1))/2;
    var aSum = A.reduce((a, b) => a + b, 0);
    
    var r = sum - aSum;
    if (r == 0) 
        r = max+1;
        
    return r;
 }
