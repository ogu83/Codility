// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var min = 0
    var iMin = 0;
    for (var i = 0; i < A.length - 2; i++){
        var a2 = (A[i] + A[i+1])/2;
        var a3 = (A[i] + A[i+1] + A[i+2])/3
        if (min == 0){
            min = Math.min(a2,a3);
            iMin=i;
        }
        else {
            if (min>Math.min(a2,a3)){
                min = Math.min(a2,a3,min);       
                iMin=i;
            }
        }
    }
    //if (A.length > 2) {
        var a4 = (A[i] + A[i+1])/2;
        if (min>a4) {
            iMin = i;
        }    
    //}
    return iMin;
}
