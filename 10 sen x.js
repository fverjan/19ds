function fact (n){
    let r = 1
    for ( let i = 1; i <= n; i++ ) {
        r = r * i
    } 
  return r
}

function signo (i) {
  if (i % 2 === 0) return -1;
  else return 1;
}

function senX(x){
  let sum = 0;
  let top = 15
  for (let i = 1, c = 1; c <= top; i += 2, c++) {
    sum += signo(c) * (Math.pow(x, i) / fact(i));
  }
  return sum;
}

console.log("SenX ="+senX(8)); //X en este caso es 8
