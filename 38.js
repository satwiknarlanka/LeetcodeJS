/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n == 1){
        return "1";
    }
    const str = countAndSay(n-1);
    let ans = "";
    let i=0,j=0,ch;
    while(i<str.length){
        if(j==0){
            ch=str.charAt(i);
            j=1;
            i++;
        }
        else if(str.charAt(i)===ch){
            j++;
            i++;
        }
        else{
            ans += j.toString()+ch;
            j=0;
        }
    }
    if(j!=0){
        ans += j.toString()+ch;
    }
    return ans;
};


console.log(countAndSay(process.argv[2]));