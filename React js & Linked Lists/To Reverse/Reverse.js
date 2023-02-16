class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    addNode(data) {
      let newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    reverseFirstLast() {
      if (!this.head || !this.head.next) {
        return;
      }
  
      let prev = null;
      let current = this.head;
      while (current.next) {
        prev = current;
        current = current.next;
      }
  
      let temp = this.head.data;
      this.head.data = current.data;
      current.data = temp;
    }
  
    printList() {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
  
  let list = new LinkedList();
  list.addNode(90);
  list.addNode(25);
  list.addNode(50);
  list.addNode(100);
  list.addNode(30);
  
  console.log("Original List:");
  list.printList();
  
  list.reverseFirstLast();

  console.log("List after reversing first and last nodes:");
  list.printList();
  