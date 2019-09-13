let n = 10
let sum = 0
let oracle

for (let i=1;i<n+1;i++){
    sum+= i*i
}

oracle = (n*(n+1)*(2*n+1))/6

console.log('Resultado: ', sum)
console.log('Oráculo: ', oracle)