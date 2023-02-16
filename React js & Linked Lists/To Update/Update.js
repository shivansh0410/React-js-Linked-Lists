class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    insert(data) {
      const node = new Node(data);
  
      if (!this.head) {
        this.head = node;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = node;
      }
    }
  
    update(index, data) {
      if (index < 0) {
        return false;
      }
  
      let current = this.head;
      let i = 0;
  
      while (current) {
        if (i === index) {
          current.data = data;
          return true;
        }
        current = current.next;
        i++;
      }
  
      return false;
    }
  
    print() {
      let current = this.head;
      const values = [];
  
      while (current) {
        values.push(current.data);
        current = current.next;
      }
  
      console.log(values.join(" -> "));
    }
  }

  const list = new LinkedList();
  list.insert(10);
  list.insert(20);
  list.insert(200);
  list.insert(40);
  list.insert(50);
  
  console.log("Original linked list:");
  list.print();
  
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question("Enter the index to update: ", (index) => {
    readline.question("Enter the new value: ", (data) => {
      const success = list.update(index, data);
  
      if (success) {
        console.log("Updated linked list:");
        list.print();
      } 
       
      else {
        console.log("Invalid index.");
      }
  
      readline.close();
    });
  });
  