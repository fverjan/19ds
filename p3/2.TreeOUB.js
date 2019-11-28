class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  class TreeBOU {
    constructor(node) {
      this.node = node;
    }
  
    insert(n, node=this.node) {
      if (n.data<node.data && node.left==null) {
        node.left = n;
        return node;
      } else if (n.data>node.data && node.right==null) {
        node.right = n;
        return node;
      } else if (n.data<node.data && node.left!=null) {
        return this.insert(n, node.left);
      } else if (n.data>node.data && node.right!=null) {
        return this.insert(n, node.right);
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
      } else if (remove<node.data && node.left!=null) {
        return this.remove(n, node.left);
      } else if (remove>node.data && node.right!=null) {
        return this.remove(n, node.right);
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
  const raiz = new Node(5);
  
  const child1 = new Node(2);
  const child2 = new Node(10);
  const child3 = new Node(7);
  
  const t1 = new TreeBOU(raiz);
  
  t1.insert(child1);
  
  t1.insert(child2);
  
  t1.insert(child3);
  
  console.log('Método de recorrido Breathd First');
  console.log(t1.bft());
  console.log('');

  console.log('Método de recorrido Preorder');
  t1.preOrder();
  console.log('');
  
  console.log("En este momento se ejecuta el método remove en el nodo 2")
  t1.remove(2);
  console.log('');
  
  console.log('Método preorder para verificar que el remove fue exitoso');
  t1.preOrder();
  
