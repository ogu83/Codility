/ you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    var Stack = [];
    for (var i = 0; i < S.length; i++) {
        if (Stack.length == 0 && S[i] == ")") {
            return 0;
        }
        else if (Stack.length == 0 && S[i] == "(") {
            Stack.push(S[i]);
        }
        else if (Stack.length > 0 && S[i] == ")") {
            if (Stack[Stack.length-1] == "(") {
                Stack.pop();
            }
            else{
                return 0;
            }
        }
        else if (Stack.length > 0 && S[i] == "(") {
            Stack.push(S[i]);
        }
    }
    if (Stack.length==0)
        return 1;
    else 
        return  0;
}
