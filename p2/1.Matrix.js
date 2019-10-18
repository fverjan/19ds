class Matrix { //Primera letra con mayuscula *Convencion*
  constructor(r, c) {
    this.r = r;
    this.c = c;
    this.data = this.init();
  }
init() {
    let init = [];

    for (let i=0; i<this.r; i++) {
      init[i] = new Array(this.c);

      for (let j = 0; j < this.c; j++) {
        init[i][j] = 0;
      }
    }
     return init;
  }
initRandom() {
    for (let i=0;i<this.r;i++) {
      this.data[i] = new Array(this.c);

      for (let j = 0; j < this.c; j++) {
        this.data[i][j] = Math.random();
      }
    }
    return this.data;
  }
getRow(r) {
    return this.data[r];
  }
getColumn(c) {
    let tmp = [];

    for (let i=0;i<this.r;i++) {
      tmp.push(this.data[i][c]);
    }
    return tmp;
  }
isSquared() {
    if (this.c==this.r) {
      return true;
    }
    return false;
  }
isSymmetric() {
    this.isSquared();

    for (let i = 0; i < this.r; i++) {
      for (let j = 0; j < this.c; j++) {
        if (this.data[i][j] != this.data[j][i]) {
          return false;
        }
      }
    }
    return true;
  }
isIdentity() {
    this.isSymmetric();

    for (let i = 0; i<this.r; i++) {
      if (this.data[i][i] !== 1) {
        return false;
      }
    }
    return true;
  }
getMatrix() {
    return this.data;
  }
}
(function useMatrix() { //Funcion invocada de inmediato

console.log("Matriz de 3x3")
  let matrix = new Matrix(3, 3);
  console.log("Matriz inicializada en 0")
  console.log(matrix.getMatrix());

  console.log("Metodo init Random");
  console.log(matrix.initRandom());

  console.log("Metodo get row (Fila 2)");
  console.log(matrix.getRow(2));

  console.log("Metodo get Column (Fila 0)");
  console.log(matrix.getColumn(0));

  console.log("Metodo is Squared");
  console.log(matrix.isSquared());

  console.log("Método is Symmetric");
  console.log(matrix.isSymmetric());

  console.log("Método is Identity");
  console.log(matrix.isIdentity());

  let id = new Matrix(3, 3);

  for (let i=0;i<id.r;i++) { //Creacion de matriz identidad
    id.data[i][i] = 1;
  }

  console.log("Test con Matriz identidad creada a propósito");
  console.log(id.getMatrix());

  console.log("Metodo is Squared");
  console.log(id.isSquared());

  console.log("Metodo is Symmetric");
  console.log(id.isSymmetric());

  console.log("Metodo is Identity");
  console.log(id.isIdentity());
})();
