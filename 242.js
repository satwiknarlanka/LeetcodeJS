/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!=t.length){
        return false;
    }
    let hash = new Array(255).fill(0);
    for(let i=0;i<s.length;i++){
        hash[s.charCodeAt(i)]++;
    }
    for(let i=0;i<t.length;i++){
        hash[t.charCodeAt(i)]--;
    }
    return hash.every(x=>x==0);
};


// inbuilt functions solution
// var isAnagram = function(s, t) {
//     s = s.split('').sort().join('');
//     t = t.split('').sort().join('');
//     return s===t;
// };

let s = "anagram", t = "nagaram";
console.log(isAnagram(s,t));

s = "car", t = "rat";
console.log(isAnagram(s,t));