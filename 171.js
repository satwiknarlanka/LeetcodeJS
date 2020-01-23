/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    let ans = 0;
    let pow = 0;
    for(let i=s.length-1;i>=0;i--){
        ans += Math.pow(26,pow)*(s.charCodeAt(i)-64);
        pow++;
    }
    return ans;
};

console.log(titleToNumber("AAA"));