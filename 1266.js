/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    if(points.length === 1){
        return 0;
    }
    let output = 0;
    
    for(let i=0;i<=points.length-2;i++){
        output += Math.max(Math.abs(points[i+1][0]-points[i][0]),Math.abs(points[i+1][1]-points[i][1]));
    }
    return output;
};

console.log(minTimeToVisitAllPoints([[1,1],[3,4],[-1,0]]))
console.log(minTimeToVisitAllPoints([[3,2],[-2,2]]))