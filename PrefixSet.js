

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var B = [];
    var ind = -1;
    for (var i=0; i<A.length; i++) {
        if (B[A[i]] === undefined) {
            B[A[i]]=i;   
            ind = i;
        }
    }
    return ind;
}

