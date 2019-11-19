/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    
    let bar1 = [];
    let bar2 = grid[0].slice();
    ans = 0;
    for(let i of grid){
        bar1.push(Math.max(...i));
        bar2 = compareMax(i,bar2);
    }
    for(let i=0;i<bar1.length;i++){
        let temp = getMaxArray(bar2,bar1[i]);
        ans += getDiff(temp,grid[i]);
    }
    return ans;
};

function compareMax(arr1,arr2){
    let arr = [];
    for (let i =0 ;i<arr1.length;i++){
        arr.push(Math.max(arr1[i],arr2[i]));
    }
    return arr;
}

function getMaxArray(arr,ele){
    let ans = [];
    for(let i=0;i<arr.length;i++){
        if(ele<arr[i]){
            ans.push(ele);
        }
        else{
            ans.push(arr[i]);
        }
    }
    return ans;
}

function getDiff(max,arr){
    let ans =0;
    for(let i=0;i<arr.length;i++){
        ans += max[i]-arr[i];
    }
    return ans;
}

console.log(maxIncreaseKeepingSkyline([[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]));
