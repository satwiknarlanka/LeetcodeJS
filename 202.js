/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const set = new Set();
    while(n!=1){
        if(set.has(n)){
            return false;
        }
        set.add(n);
        n = [...n.toString()].map(x=>parseInt(x)).reduce((a,b)=>a+b**2,0)
    }
    return true;
};

console.log(isHappy(process.argv[2]));