/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    result = 0;
    bal = 0;
    for(let ch of s){
        if(ch === 'R')
            bal++;
        else
            bal --;
        if(bal === 0)
            result++;
    }
    return result;
};

console.log(balancedStringSplit("RLRRLLRLRL"));