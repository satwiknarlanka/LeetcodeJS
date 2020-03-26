/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const sorted = [...nums].sort((a,b)=>a-b);
    let ans = []
    for(x of nums){
        ans.push(sorted.indexOf(x));
    }
    return ans;
};

console.log(smallerNumbersThanCurrent([8,1,2,2,3]));
console.log(smallerNumbersThanCurrent([6,5,4,8]));
console.log(smallerNumbersThanCurrent([5,0,10,0,10,6]));