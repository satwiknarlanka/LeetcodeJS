/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows == 0){
        return [];
    }
    if(numRows == 1){
        return [[1]];
    }
    let ans = [[1]],row=[],prev=[1];

    for(let i = 1;i<numRows;i++){
        row.push(1);
        for(let j=1;j<prev.length;j++){
            row.push(prev[j-1]+prev[j]);
        }
        row.push(1);
        ans.push(row);
        prev = row;
        row = [];
    }
    return ans;
};

console.log(generate(process.argv[2]));