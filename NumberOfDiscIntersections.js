// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function bounds(i,v) {
    return [i-v,i+v];
}
function intersect(a,b) {
    return !((a[1][1] < b[1][0]) || (b[1][1]<a[1][0]));
}

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var r = 0;
    var AA = A.map(function(v,i) { return [v,bounds(i,v)]; })
    AA.sort(function(a,b) { return a[1][0] - b[1][0]; });
    for (var i = 0; i < AA.length-1; i++) {
        for (var j = i+1; j < AA.length; j++) {
            var inter = intersect(AA[i], AA[j]);
            if (inter) r++; else break;
            if (r>10000000) return -1;
        }
    }
    //console.log(AA);
    //console.log(r);
    return r;
}
