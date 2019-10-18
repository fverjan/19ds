class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Linkedlist{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertHead(node){
        if(this.head != null){
            node.next = this.head
            this.head = node;
        }
        else{
            this.head = node;
            if(this.tail == null) this.tail = node;
        } 
        this.size ++;
    }

    insertTail(node){
        if(this.tail != null){
            (this.tail).next = node;
            this.tail = node;
        }
        else{
            this.tail = node;
            if(this.head == null) this.tail = node;
        } 
        this.size ++;
        node.next = null
    }

    deleteHead(){
        let temp = this.head.next;
        this.head.next = null
        this.head = temp;
        this.size --;
    }

    deleteTail(){
        
        let nuevacol = this.head;
        
        for(let i = this.size ; i > 2 ;i--){
            nuevacol = (nuevacol).next;
            
        }
        this.tail = nuevacol;
        this.size --;
    }

    size(){
        return this.size;
    }

    toString(node){
        let string = '';

        while (node !== null) {
        string = string + "<->"+ node.data;
        node = node.next;
        }

        return string
    }
}


let node1 = new Node("1");
let node2 = new Node("2");
let node3 = new Node("3");
let node4 = new Node("4");

let lista1 = new Linkedlist;

lista1.insertHead(node4)
lista1.insertHead(node3)
lista1.insertHead(node2)
lista1.insertHead(node1)
lista1.insertTail(node4)

lista1.toString(node1)

