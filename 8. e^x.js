function fac(n){
    let fact = 1
    for( let i = 1; i <= n; i++ ) {
        fact= fact* i
    } 
    return fact
}


function operacion (x, n){
    if(n < 1) {
        return 1
    }
    return (Math.pow(x, n))/(fac(n))+operacion(x,n-1)
} 

console.log("e^x = "+operacion(3, 9)) //x,n



