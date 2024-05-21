// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class linkedList {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }

//   isEmpty() {
//     return this.size === 0;
//   }

//   getSize() {
//     return this.size;
//   }

//   prepend(value) {
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node;
//     } else {
//       node.next = this.head;
//       this.head = node;
//     }
//     this.size++;
//   }

//   append(value) {
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node
//     } else {
//       let prev = this.head
//       while(prev.next) {
//         prev = prev.next
//       }
//       prev.next = node
//     }
//     this.size++
//   }

//   search(value) {
//     if(this.isEmpty()){
//       return -1
//     }
//       let curr = this.head;
//       let i = 0;
      
//       while(curr) {
//         if(curr.value === value) {
//           return i
//         }
//         i++
//         curr = curr.next    
//     }
//     return -1
    
//   }

//   reverse() {
//     let prev = null
//     let curr = this.head
//     while(curr) {
//       let next = curr.next
//       curr.next = prev
//       prev = curr
//       curr = next
//     }
//     this.head = prev;
//   }

//   removeValue(value) {
//     if(this.isEmpty()){
//       return null
//     }
//     if(this.head.value === value) {
//       this.head = this.head.next
//       this.size--
//     } else {
//       let prev = this.head
//       while(prev.next && prev.next.value !== value) {
//         prev = prev.next
//       }
//       if(prev.next) {
//         let removedNode = prev.next
//         prev.next = removedNode.next
//         this.size--
//         return value
//       }
//       return null
//     }
//   }

//   print() {
//     if (this.isEmpty()) {
//       console.log("List is empty");
//     } else {
//       let curr = this.head;
//       let listValues = "";
//       while (curr) {
//         listValues += `${curr.value} `;
//         curr = curr.next;
//       }
//       console.log(listValues);
//     }
//   }
// }

// const list = new linkedList();

// list.prepend(10);
// list.append(30)
// list.print();
// list.reverse();
// list.print()
// console.log(list.search(10))
// list.removeValue(30)
// list.print()





// add node to first and end of the liked list

// class Node {
//   constructor(value) {
//     this.value = value
//     this.next = null
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null
//     this.tail = null
//     this.size = 0
//   }

//   isEmpty() {
//     return this.size === 0
//   }

//   getSize() {
//     return this.size
//   }

//   prepend(value) {
//     let node = new Node(value)
//     if(this.isEmpty()) {
//       this.head = node
//       this.tail = node
//     } else {
//       node.next = this.head
//       this.head = node
//     }
//     this.size++
//   }

//   append(value) {
//     let node = new Node(value)
//     if(this.isEmpty()) {
//       this.head = node
//       this.tail = node
//     } else {
//       this.tail.next = node
//       this.tail = node
//     }
//     this.size++
//   }

//   print() {
//     if(this.isEmpty()) {
//       console.log('List is empty')
//     } else {
//     let curr = this.head
//     let listValues = ""
//     while(curr) {
//       listValues += `${curr.value} `
//       curr = curr.next
//     }
//     console.log(listValues)
//   }

// }

// }

// let list = new LinkedList()

// list.prepend(10)
// list.print()
// list.append(30)
// list.print()






// Delete node with the value specified

class Node {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

class linkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  isEmpty() {
    return this.size === 0
  }

  prepend(val) {
    const node = new Node(val)
    if(this.isEmpty()) {
      this.head = node
      this.tail = node
    } else {
      node.next = this.head
      this.head = node
    }
    this.size++
  }

  delete(val) {
    if(this.isEmpty()) {
      console.log('List is empty')
    } 
    let curr = this.head
    
      if(this.size === 1) {
        this.head = null
        this.tail = null
        this.size--
      }
      else if(this.head.value=== val) {
        this.head = this.head.next
        this.size--
      } else if(this.tail.value === val) {
        this.tail = this.tail.prev
        this.tail.next = null
        this.size--
      } else {
        let curr = this.head.value 
        while (curr.next && curr.next.value !== val) {
          curr = curr.next;
        }
        if(curr.next){
          let removedNode = curr.next
          curr.next = removedNode.next
          this.size--
        }
        return null
      }
    
  }

  print() {
    if(this.isEmpty()) {
      console.log('List is empty');
    }
    let curr = this.head
    let listValues = ""
    while(curr) {
      listValues += `${curr.value} `
      curr = curr.next
    }
    console.log(listValues)
  }

}

const list = new linkedList()

list.print()
list.prepend(10)
list.prepend(20)
list.print()
list.delete(20)
list.print()
list.delete(10)
list.print()