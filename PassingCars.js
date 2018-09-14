// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    //var sum0 = 0;
    var sum1 = 0;
    var sum = 0;
    for (var i = 0; i < A.length; i++) {
        if (A[i] == 0) {
            //sum0++;
        }
        else {
            sum1++;
        }
    }
    for (var i = 0; i < A.length; i++) {
        if (A[i] == 0) {
            sum += sum1;
            if (sum>1000000000)
                return -1;
        }
        else {
            sum1--;
        }
    }
    
    return sum;
}
