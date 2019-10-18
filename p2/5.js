class Factorial {
    constructor(n) {
        this.n = n;
    }
value(n=this.n){
    function factorial(n){
        if(n == 0) {
            return 1
        } else {
            return n * factorial(n - 1);
        }
        
    }
    return factorial(n)
}
cost(n=this.n){
    let cont=0
    if(n==0){
        return 1
    }else{
    function factorial(n) {
        if(n == 1) {
            cont++;
        } else {
            cont++;
            return n * factorial(n - 1);
        }
        
    }
    factorial(n)
    return cont
    }

}
sucesion() {
    let sucesion = [];
    if(this.n==0){
        return 1
    }else{
    for (let i = 1; i <= this.n; i++) {
        sucesion.push(this.value(i));
    }
    return sucesion;
    }
}
table() {
    let table = [];
    if(this.n==0){
        return 1
    }else{
    for (let i = 1; i <= this.n; i++) {
        table.push(this.cost(i));
    }
    return table;
    }
}


}
let f1=new Factorial(5)
console.log("Metodo Value para fact("+f1.n+")")
console.log(f1.value())
console.log("Metodo Cost para fact("+f1.n+")")
console.log(f1.cost())
console.log("Metodo Sucesion para fact("+f1.n+")")
console.log(f1.sucesion())
console.log("Metodo Table para fact("+f1.n+")")
console.log(f1.table())
