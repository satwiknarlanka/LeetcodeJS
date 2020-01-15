/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let ans,count=0;
    for(x of nums){
        if(count == 0){
            ans = x;
            count++;
        }
        else{
            count = ans===x?count+1:count-1;
        }
    }
    return ans;
};

console.log(majorityElement([3,2,3]));
console.log(majorityElement([2,2,1,1,1,2,2]));
