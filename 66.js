/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let n = digits.length;
    let carry = 1;
    for(let i=n-1;i>=0;i--){
        digits[i] = digits[i]+carry;
        carry = 0;
        if(digits[i]===10){
            digits[i]=0;
            carry = 1
        }
        else{
            break;
        }
    }
    if(carry ===1){
        digits.unshift(1);
    }
    return digits;
};

let digits = [9,9,9];
console.log(plusOne(digits));