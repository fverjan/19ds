let array = [1,1,2,3,4,4,5,6,6,7,8,9,9,10]
let array2 = [1,2,3]

function rep (array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < i; j++) {            
            if (array[i]===array[j]){
                return "Si hay numeros repetidos"
            } 
        } 
    }  
     return "no hay numeros repetidos"
}

console.log("Array 1: "+array)
console.log(rep(array))
console.log("Array 2: "+array2)
console.log(rep(array2))
