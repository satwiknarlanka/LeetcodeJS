let J = "aA", S = "aAAbbbb";
jewel = new Set(J);
let ans = 0;
for (let ch of S){
    if (jewel.has(ch))
    {
        ans++;
    }
}
console.log(ans);