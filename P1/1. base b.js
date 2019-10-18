var r= prompt("Teclea una base del logaritmo")

function log(x){
    return Math.log(x)/Math.log(r)
}

for (var i=1;i<11;i++){
    console.log("Log"+r+"("+(i)+")= "+log(i))
}

