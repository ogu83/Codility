// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var result = [];
    var max = 0;
    var maxed = false;
    for (var i = 0; i<N; i++) {
        result.push(0);
    }
    //console.log(result);
    for (var i = 0; i < A.length; i++) {
        //console.log(result);
        var val = A[i];
        if (val < N+1 && val > 0) {
            result[val-1] += 1;
            max = Math.max(result[val-1],max);
            maxed = false;
        }
        else if (val == N+1) {
            if (!maxed) {
                for (var j = 0; j<N; j++) {
                    result[j] = max;
                }                
                maxed = true;
            }
        }
    }
    return result;
}
