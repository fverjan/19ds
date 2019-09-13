function fact(n){ //obtiene factorial
    let fact = 1
    for ( let i = 1; i <= n; i++ ) {
        fact = fact * i
    } 
    return fact
}

function catalan(n){ 
    return fact(2 * n) / (fact(n+1) * fact(n))
}

let n = 5 //Cantidad de numeros catalanes a obtener


for(let i = 0; i < n; i++) {
    console.log(catalan(i))
}
