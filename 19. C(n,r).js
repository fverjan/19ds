function fact(n){
    let r = 1
    for ( let i = 1; i <= n; i++ ) {
        r = r * i
    } 
    return r
}

function p (n, r) {
    return (fact(n)) / fact((n - r))
}

function comb(n, r){ //combinación sin repeticion
    return p(n, r) / fact(r)
}

console.log(comb(8, 2))
