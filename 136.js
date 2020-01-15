/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    return nums.reduce((x,y)=>x^y);
};

let nums = [2,2,1];
console.log(singleNumber(nums));
nums = [4,1,2,1,2];
console.log(singleNumber(nums));
