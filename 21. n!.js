let n=7
function fac (n){
    var total=1;
    for (let i=1; i<=n; i++){
        total=total*i;
        
    }
    return total
}

console.log("Factorial de "+n+": "+fac(n))