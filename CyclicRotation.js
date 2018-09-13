function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    var len = A.length;
    if (K == len) {
        return A;
    }
    
    var allElemsSame = true;
    for (var i = 1; i < len; i++) {
        if (A[i] != A[i-1]) {
            allElemsSame = false;
            break;
        }
    }
    if (allElemsSame)
        return A;
    
    for (var i = 0; i < K; i++) {
        A = A.reverse();
        var f = A.shift();
        A.push(f);
        A = A.reverse();
    }
    return A;
}
