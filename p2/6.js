class Fibonacci {
    constructor(n) {
        this.n = n;
    }
    getValue(n = this.n) {
        function valor(n){
            if(n < 2){
                return n;
            } else {
                return valor(n-1) + valor(n-2);
            }
        }
        return valor(n);
    }
    
    getCost(n = this.n) {
        let cont = 0;
        function valor(n){
            if(n < 2){
                cont++;
            } else {
                cont++;
                return valor(n-1) + valor(n-2);
            }
        }
        valor(n);
        return cont;
    }

    getSucesion() {
        let sucesion = [];
        for (let i = 1; i <= this.n; i++) {
            sucesion.push(this.getValue(i));
        }
        return sucesion;
    }

    getTable() {
        let table = [];
        for (let i = 1; i <= this.n; i++) {
            table.push(this.getCost(i));
        }
        return table;
    }
}

let fib = new Fibonacci(7);
console.log("Metodo get Value para f("+fib.n+")")
console.log(fib.getValue());
console.log("Metodo get Sucesion para f("+fib.n+")")
console.log(fib.getSucesion());
console.log("Metodo get Cost para f("+fib.n+")")
console.log(fib.getCost());
console.log("Metodo get Table para f("+fib.n+")")
console.log(fib.getTable());