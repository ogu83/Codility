// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function iFactor(val) {
    switch (val) {
        case "A": return 1;
        case "C": return 2;
        case "G": return 3;
        case "T": return 4;
    }
}

function solution(S, P, Q) {
    // write your code in JavaScript (Node.js 8.9.4)
    var retval = [];
    for(var p=0; p < P.length; p++) {
        var start = P[p];
        var stop = Q[p];
        
        if (p > 0) {
            for (pp = p-1; pp>=0; pp--) {
                var pStart = P[pp];
                var pStop = Q[pp];    
             
                if (pStart <= start && pStop >= stop) {
                    retval[p] == retval[pp];
                    break;
                }
            }
        }
        
        if (retval[p] === undefined) {
            retval[p] = 5;   
            for (i=start; i <= stop; i++) {
                if (retval[p] == 1) {
                    break;   
                }
                else {
                    if (retval[p] > (iFactor(S[i]))) {
                        retval[p] = iFactor(S[i]);   
                    }
                }
            }
        }
    }
    return retval;
}
