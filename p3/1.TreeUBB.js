class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  class TreeUBB {
    constructor(node) {
      this.node = node;
    }
  
    insert(n, node = this.node) {
        if (node.left==null) {
          node.left = n;
          return node;
        } else if (node.right==null) {
          node.right = n;
          return node;
        } else if (node.right!=null && node.left.right==null) {
          return this.insert(n, node.left);
        } else if (node.left!=null && node.right.left==null) {
          return this.insert(n, node.right);
        } else if (node.right!=null && node.right.right==null) {
          return this.insert(n, node.right);
        } else {
          return this.insert(n, node.left);
        }
      }
  
    remove(remove, node=this.node) {
      if (node==null) {
        return null;
      }
      if (node.left.data==remove) {
        node.left = null;
        return node;
      } else if (node.right.data==remove) {
        node.right = null;
        return node;
      } else if (node.right!=null && node.left.right==null){
        return this.remove(remove, node.left);
      } else if (node.left!=null && node.right.left==null){
        return this.remove(remove, node.right);
      } else if (node.right!=null && node.right.right==null){
        return this.remove(remove, node.right);
      } else {
        return this.remove(remove, node.left);
      }
    }
  
    bft(node = this.node) {
      let queue = [];
      let print = [];
  
      queue.push(node);
  
      while (queue.length) {
        let nodeTemp = queue.shift();
  
        print.push(nodeTemp.data);
  
        if (nodeTemp.left) {
          queue.push(nodeTemp.left);
        }
  
        if (nodeTemp.right) {
          queue.push(nodeTemp.right);
        }
      }
  
      return print;
    }
  
    preOrder(node = this.node) {
      console.log(node.data);
  
      if (node.left) {
        this.preOrder(node.left);
      }
  
      if (node.right) {
        this.preOrder(node.right);
      }
    }
  }
  
  let raiz = new Node(1);
  let child1 = new Node(3);
  let child2 = new Node(7);
  let child3 = new Node(2);
  let child4 = new Node(4);
  let child5 = new Node(5);//Creación de nodos que contendrá el arbol
  let child6 = new Node(6);

  let t1 = new TreeUBB(raiz);
  t1.insert(child1);
  t1.insert(child2);
  t1.insert(child3);
  t1.insert(child4);
  t1.insert(child5);
  t1.insert(child6); //Insertado de nodos a arbol

  
  console.log('Método de recorrido Breathd First'); 
  console.log(t1.bft());
  console.log('');
  
  console.log('Método de recorrido Preorder');
  t1.preOrder();
  console.log('');
  
  console.log("En este momento se ejecuta el método remove en uno de los nodos, por lo que desaparecera junto con sus respetivos hijos")
  t1.remove(7);
  console.log('');
  
  console.log('Método preorder para verificar que el remove fue exitoso');
  t1.preOrder();
  
