function fact(n){
    let fact = 1
    for ( let i = 1; i <= n; i++ ) {
        fact = fact * i
    } 
  return fact
}

function Signo(i) {
  if (i % 2 === 0) return -1;
  else return 1;
};
function cosX (x) {
  let sum = 1
  let top = 15

  for (let i = 2, c = 2; c <= top; i += 2, c++) {
    sum += Signo(c) * (Math.pow(x, i) / fact(i));
  }
  return sum;
};

console.log("cosX ="+cosX(7));//X en este caso es 7