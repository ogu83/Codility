// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var length = A.length;
	var bCheck = [];
	for(var i=0;i<length;i++) {
		if(A[i]<1 || A[i]>length){
			return 0;
		}
		else {
			if(bCheck[A[i]-1]) {
				return 0;
			}
			else {
			    bCheck[A[i]-1]=true;
			}
		}
	}
	return 1;
}
