let n = 10
let a = 4
let sum = 0
let oracle

for (let i = 0; i <= n; i++) {
    sum += Math.pow(a, i);
}

oracle = (Math.pow(a, n + 1) - 1) / (a - 1)

console.log("Resultado: ", sum)
console.log("Oráculo: ", oracle)