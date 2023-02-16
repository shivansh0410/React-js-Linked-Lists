class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    addNode(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
      this.size++;
    }
  
    deleteFirstNode() {
      if (!this.head) {
        return;
      }
      this.head = this.head.next;
      this.size--;
    }
  
    printList() {
      let current = this.head;
      let output = '';
      while (current) {
        output += current.data;
        current = current.next;
        if (current) {
          output += ' -> ';
        }
      }
      console.log(output);
    }
  }
  
  const list = new LinkedList();
  list.addNode(15);
  list.addNode(21);
  list.addNode(43);
  list.printList();
  list.deleteFirstNode();
  list.printList();
  