let array = [1,1,2,3,4,4,5,6,6,7,8,9,9,10]

function rep (array) {
    let contador = 0
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < i; j++) {            
            if (array[i]===array[j]){  
               contador++
            } 
        } 
    } 
    return contador
}

console.log("Array completo: "+array)
console.log("Se repiten "+rep(array)+" numeros")