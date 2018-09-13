function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    var gap = 0;
    var gapStart = false;
    var maxGap = 0;
    while (N > 0) {
        var bin = N % 2
        N = Math.floor(N / 2);
        if (bin == 1) {
            gapStart = true;
            if (gap > maxGap)
                maxGap = gap;
            gap = 0;
        } else {
            if (gapStart)
                gap++;
        }
    }
    return maxGap;
}
