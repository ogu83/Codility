// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, Y, D) {
    // write your code in JavaScript (Node.js 8.9.4)
    var result = (Y-X)/D;
    if (result == Math.floor(result))
        return result;
    else
        return Math.floor(result)+1;
        
}
