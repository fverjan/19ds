// O(f(n))
let n = 10
let suces=[]

function fib (n) {
    let a = 0
    let b = 1
    let c = 1

    for(let i = 1; i <= n; i++) {
      suces.push(c)
        c = a + b
        
        a = b
        b = c
    }
    return suces
}

console.log("Primeros "+n+" dígitos Fibonacci: "+fib(n))