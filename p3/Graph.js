class Graph{
    constructor(r){
        this.r=r
        this.c=r
        this.data = this.init()
    }
    init() {
        let init = [];
    
        for (let i=0; i<this.r; i++) {
          init[i] = new Array(this.r);
    
          for (let j = 0; j < this.c; j++) {
            init[i][j] = 0;
          }
        }
         return init;
      }

      printGraph(){
        return this.data
      }

      addVertex(){
          this.r++
          this.c++
          this.data.length++
          for (let i=0; i<this.data.length-1 ;i++){
              this.data[i].length++
          }
          for (let i=this.data.length-1; i<this.data.length; i++) {
            this.data[i] =new Array(this.data.length-1);
      
            for (let j = 0; j < this.data.length; j++) {
              this.data[i][j] = 0;
              this.data[j][i] = 0;
            }
          } 
        }

      addEdege(v1,v2,bol){
        this.data[v1][v2]++
        if(bol==true){
            this.data[v2][v1]++;
        }
      }
      
      isComplete(){
          let temp=0
        for (let i=0; i<this.data.length; i++) {
            for (let j = 0; j <this.data.length; j++) {
                if(this.data[i][i]!=0){
                    return false
                }else if(this.data[i][j]==1){
                    temp++
                }
            }
        }
        if(temp==(this.data.length*this.data.length)-this.data.length){
            return true
        }else{
            return false
        }
    }

    isMultigraph(){
        let temp=0
        for (let i=0; i<this.data.length; i++) {
            for (let j = 0; j <this.data.length; j++) {
                if(this.data[i][i]!=0 ||this.data[i][j]>1){
                    temp++
                }
            }
        }
        if(temp!=0){
            return true
        }else{
            return false
        }
    }

    isSubgraph(g){
        if(this.r>g.r || this.c>g.r){
            return false + "\n El grafo 1 no puede ser subgrafo del grafo 2, debido a que tiene mas vértices"
        }
        let temp=0   
        for (let i=0; i<this.data.length; i++) {
            for (let j = 0; j <this.data.length; j++) {
                if(this.data[i][j]<=g.data[i][j]){
                    temp++
                }
            }
        }
        if(temp==this.data.length*this.data.length){
            return true
        }else{
            return false
        }
    }
    isDirected() {
        for (let i = 0; i < this.data.length; i++) {
          for (let j = 0; j < this.data.length; j++) {
            if (this.data[i][j] != this.data[j][i]) {
              return false;
            }
          }
        }
    
        return true;
      }

    isIsomorphic(g) {
        let temp=0
        for (let i=0; i<this.data.length; i++) {
            for (let j = 0; j <this.data.length; j++) {
                if(this.data[i][j]==g.data[i][j]){
                    temp++
                }
            }
        }
        if(temp==this.data.length*this.data.length){
            return true
        }else{
            return false
        }
     }
}
g2=new Graph(2)
g3=new Graph(3)
g4=new Graph(4)
g5=new Graph(4)
g6=new Graph(4)
g7=new Graph(4)

g2.addEdege(0,1,true)//Este grafo sirve para ser subgrafo del grafo1

g3.addEdege(2,0,true)
g3.addEdege(1,0,true)//Estas 3 lineas son para crear un grafo completo, el grafo g3
g3.addEdege(2,1,true)

g4.addEdege(1,0,true)
g4.addEdege(0,0) //Esta linea crea un Multigrafo, con una conexión a si mismo

g5.addEdege(1,0,true)
g5.addEdege(2,0,true)
g5.addEdege(3,0,true) //creación de grafo dirigido
g5.addEdege(3,1,true)
g5.addEdege(3,2,true)

g6.addEdege(0,2)
g6.addEdege(3,0) //grafo no dirigido
g6.addEdege(1,3)
g6.addEdege(2,3)

g7.addEdege(1,0,true)
g7.addEdege(2,0,true)
g7.addEdege(3,0,true) //creación de grafo isomorfico al grafo 5
g7.addEdege(3,1,true)
g7.addEdege(3,2,true)



console.log("Matriz de un grafo (5)")
g1=new Graph(5)
console.log(g1.printGraph())
console.log(" ")


console.log("Método añadir un nodo")
g1.addVertex()
console.log(g1.printGraph())
console.log(" ")


console.log("Método añadir una conexión, en este caso lo use 2 veces para añadir 2 conexiones. En ambas use true")
g1.addEdege(1,0,true)
g1.addEdege(2,0,true)
console.log(g1.printGraph())
console.log(" ")


console.log("Método isComplete (Boolean-False)")
console.log(g1.printGraph())
console.log(g1.isComplete())
console.log(" ")


console.log("Método isComplete (Boolean-True)")
console.log(g3.printGraph())
console.log(g3.isComplete())
console.log(" ")


console.log("Método isMultigraph (Boolean-False)")
console.log(g1.printGraph())
console.log(g1.isMultigraph())
console.log(" ")


console.log("Método isMultigraph (Boolean-True)")
console.log(g4.printGraph())
console.log(g4.isMultigraph())
console.log(" ")


console.log("Método isSubgraph (Boolean-false)")
console.log("Grafo 1")
console.log(g1.printGraph())
console.log("¿El grafo de arriba es subgrafo del grafo de abajo?")
console.log("Grafo 2")
console.log(g2.printGraph())
console.log(g1.isSubgraph(g2))
console.log(" ")


console.log("Método isSubgraph (Boolean-True)")
console.log("Grafo 2")
console.log(g2.printGraph())
console.log("¿El grafo de arriba es subgrafo del grafo de abajo?")
console.log("Grafo 1")
console.log(g1.printGraph())
console.log(g2.isSubgraph(g1))

console.log("Método isDirected (Boolean-True)")
console.log(g5.printGraph())
console.log(g5.isDirected())
console.log(" ")

console.log("Método isDirected (Boolean-False)")
console.log(g6.printGraph())
console.log(g6.isDirected())
console.log(" ")

console.log("Método isIsomorphic (Boolean-False)")
console.log(g5.printGraph())
console.log(g6.printGraph())
console.log(g5.isIsomorphic(g6))
console.log(" ")

console.log("Método isIsomorphic (Boolean-True)")
console.log(g5.printGraph())
console.log(g7.printGraph())
console.log(g5.isIsomorphic(g7))
console.log(" ")






