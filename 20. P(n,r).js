function fact(n){
    let r = 1
    for ( let i = 1; i <= n; i++ ) {
        r = r * i
    } 
    return r
}

function P (n, r){
    return (fact(n)) / fact((n - r))
}

console.log(P(8, 2))