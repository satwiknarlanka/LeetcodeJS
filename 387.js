/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const hash = new Array(26).fill(0);
    for(ch in s){
        hash[s.charCodeAt(ch)-97]++;
    }
    for(ch in s){
        if(hash[s.charCodeAt(ch)-97] == 1){
            return ch;
        }
    }
    return -1;
};

console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));