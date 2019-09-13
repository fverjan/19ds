let array = [1,1,2,3,4,4,5,6,6,7,8,9,9,10]

function rep(array){
    let repet = []
    for (let i=0;i<array.length;i++){
        for (let a=0;a<i;a++) {            
            if (array[i]===array[a]){  
               repet.push(array[i])
            } 
        } 
    } 
    return repet
}

console.log("Array completo: "+array)
console.log("Numeros repetidos= "+rep(array))