/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let ptr=0,curr=nums[0];
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=curr){
            curr = nums[i];
            ptr++;
            nums[ptr]=curr;
        }
    }
    
    while(ptr+1<nums.length){
        nums.pop();
    }
    return ptr+1;
};

console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));