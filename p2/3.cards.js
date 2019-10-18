class Card {
    constructor() {}
  printCard(n) {
      return [Math.floor(n%13), Math.floor(n/13)];
    }
  printNumber(k, n) {
      return k + n * 13;
    }
factorial (n) {
        let total = 1; 
        for (let i=1; i<=n; i++) {
            total = total * i; 
        }
        return total; 
    }
    fourOfAKind(){
        let any= this.factorial(52)/((this.factorial(52-5))*this.factorial(5)) //Combinaciones posibles para obtener cualquier mano en poker

        let poker= this.factorial(13)/((this.factorial(13-1))*this.factorial(1))
                  *this.factorial(4)/((this.factorial(4-4))*this.factorial(4))
                  *this.factorial(12)/((this.factorial(12-1))*this.factorial(1)) 
                  *this.factorial(4)/((this.factorial(4-1))*this.factorial(1)) //Combinaciones posibles para obtener 4 del mismo tipo

                  /*Explicacion matemática: Hay 13 diferentes filas, debemos escoger una comb(13,1), luego debemos escoger 4 de las 4 cartas comb (4,4).
                   De la las 12 filas restantes debemos escoger solo una comb(12,1), y estando en esa fila debemos escoger una de las 4 cartas comb(4,1).*/

                  //Para saber la probabilidad de obtener 4 del mismo tipo= Combinaciones posibles de cualquier manor/combinaciones posibles de obtener 4 del mismo tipo
        let probPoker=poker/any
        return probPoker
    }
  }
  
  
  (function useCard() {
    let carta = new Card();
    console.log("0=Trebol, 1=Diamantes, 2= Corazones, 3=Picas")
  
    console.log("Carta numero 25, deberia regresar 1 vuelta y 12 conteos = 12 de Diamantes")
    console.log(carta.printCard(25));
    console.log("Método inverso, debería regresar carta numero 25")
    console.log(carta.printNumber(12, 1));
    console.log("Método Four of a Kind (Poker)")
    console.log(carta.fourOfAKind())
  })();
