/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let ptr=0;
    for(let x of nums){
        if(x!=0){
            nums[ptr++] = x;
        }
    }
    nums.fill(0,ptr);
    return nums;
};

console.log(moveZeroes([0,1,0,3,12]));
console.log(moveZeroes([5,1,5,3,12]));