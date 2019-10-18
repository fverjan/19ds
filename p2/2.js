class Vector { //Primera letra con mayuscula *Convencion*
    constructor(data) {
      this.data = data;
    }
sum(v) {
      if (this.data.length != v.length) {//Validacion los vectores deben ser del mismo largo
        return console.log("Los vectores deben ser de la misma longitud");
    }
        return this.data.map((item, i) => item + v[i]);
    }
subt(v) {
      if (this.data.length != v.length) {
        return console.log("Los vectores deben ser de la misma longitud");
      }
        return this.data.map((item, i) => item - v[i]);
    }
mul(v) {
      if (this.data.length != v.length) {
        return console.log("Los vectores deben ser de la misma longitud");
      }
        return this.data.map((item, i) => item * v[i]);
    }
getVector() {
      return this.data;
    }
  }
  
  (function useVector() {
    let vecA = [1, 2, 3, 4, 5, 6];
    console.log("Vector A="+vecA)
  
    let vecB = [11,12,13,14,15,16];
    console.log("Vector B="+vecB)

    let v = new Vector(vecA);
  
    console.log("Método sum");
    console.log(v.sum(vecB));
  
    console.log("Método Subt");
    console.log(v.subt(vecB));
  
    console.log("Método mul");
    console.log(v.mul(vecB));
  
    console.log("Método get Vector (Vector A)");
    console.log(v.getVector());
  })();