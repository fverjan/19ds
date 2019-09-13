let  a = [5,3,2,7,10,1,1,3]
console.log("Array inicial: [" +a+"]")

for (let i=0;i<a.length;i++){
    for (let e = 0; e<a.length-i-1;e++) {
        if(a[e] > a[e+1]){
             let tmp = a[e+1];
             a[e+1] = a[e];
             a[e] = tmp;
            }
        }
    }

console.log("Array ordenado: [" +a+"]")


