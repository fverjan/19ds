let n = 10
let a = 2
let sum = 0
let oracle

for (let i = 1; i <= n; i++) {
    sum+= Math.pow(i, a)
}

oracle = ((1 / (a+1)) * (Math.pow(n,(a+1))))

console.log('Resultado: ', sum)
console.log('Formula (Aproximado): ', oracle)