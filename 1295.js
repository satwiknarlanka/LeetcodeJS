/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let result = 0;
    for(num of nums){
       if(num.toString().length%2 == 0)
        result++;
    }
    return result;
};

nums = [12,345,2,6,7896]
console.log(findNumbers(nums));

// Solution without string function
// var findNumbers = function(nums) {
//     let result = 0;
//     for(num of nums){
//         let even = true;
//         while(num>=1){
//             even = !even;
//             num = num/10;
//         }
//         result += even;
//     }
//     return result;
// };