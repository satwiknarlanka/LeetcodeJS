/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let ans = 0;
    while(n>0){
        ans += n&1;
        n= n>>>1;
    }
    return ans;
};

console.log(hammingWeight(process.argv[2]));