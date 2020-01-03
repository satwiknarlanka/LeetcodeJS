/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let arr = [...n.toString()];
    let product=1,sum = 0
    product = arr.reduce((a,b)=> a*b,1);
    sum = arr.reduce((a,b)=>a+parseInt(b),0);
    return product-sum;
};

n = 4421
console.log(subtractProductAndSum(n));