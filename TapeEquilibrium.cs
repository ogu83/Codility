// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var aSum = A.reduce((a, b) => a + b, 0);
    var bSum = 0;
    var diff = -1;
    while (A.length>1 && diff != 0) {
        var a = A.pop();
        bSum += a;
        aSum -= a;
        
        if (diff == -1)
            diff = Math.abs(aSum - bSum);
        else if (diff > Math.abs(aSum - bSum))
            diff = Math.abs(aSum - bSum);
            
        console.log(aSum,bSum,diff);
    }
    return diff;
}
