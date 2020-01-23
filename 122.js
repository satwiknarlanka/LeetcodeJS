/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length<2) return 0;
    let min = Infinity;
    let ans = 0;
    for(x of prices){
        if(x>min){
            ans += x-min;
        }
        min = x;
    }
    return ans;
};

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([1,2,3,4,5]));
console.log(maxProfit([7,6,4,3,1]));
console.log(maxProfit([2,1,2,0,1]));