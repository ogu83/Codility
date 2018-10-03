// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function P2Val(p) {
    switch(p) {
        case "{":
            return 1;
        case "}":    
            return -1;
        case "[":
            return 2;
        case "]":    
            return -2;
        case "(":
            return 3;
        case ")":    
            return -3;
    }
}

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    var P = [];
    for (var i = 0; i < S.length; i++) {
        if (P.length == 0) {
            if (P2Val(S[i])>0) {
                P.push(P2Val(S[i]));   
            } 
            else {
                return 0;
            }
        }
        else {
            if (P[P.length-1] + P2Val(S[i]) == 0){
                P.pop();
            }
            else if ((P[P.length-1]>0 && P2Val(S[i])<0) || (P[P.length-1]<0 && P2Val(S[i])>0)) {
                return 0;
            }
            else {
                P.push(P2Val(S[i]));
            }
        }
    }
    return P.length>0 ? 0 : 1
}
