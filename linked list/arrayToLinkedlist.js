
class Node {
    constructor (value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor () {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    add(value) {
        const node = new Node (value);
        if(this.isEmpty()) {
            this.head = node
        } else {
            let curr = this.head
            while(curr.next) {
                curr = curr.next
            }
            curr.next = node
        }
    }

    print() {
        if (this.isEmpty()) {
            console.log('List is empty')
        }
        else{
            let curr = this.head
        let listValues = ""
        while(curr) {
            listValues += `${curr.value} `
            curr = curr.next
        }
        console.log(listValues)
        }
        
    }
}

function arrayToLinkedList (arr) {
    let linkedList = new LinkedList()
    arr.forEach(item=>linkedList.add(item))
    return linkedList
}

let list = new LinkedList()
const array = [10,20,3,4,5]
arrayToLinkedList(array)
list.print()

// class Node {
//     constructor(value) {
//       this.value = value;
//       this.next = null;
//     }
//   }
  
//   class LinkedList {
//     constructor() {
//       this.head = null;
//       this.size = 0;
//     }
  
//     add(value) {
//       const node = new Node(value);
//       if (this.isEmpty()) {
//         this.head = node;
//       } else {
//         let curr = this.head;
//         while (curr.next) {
//           curr = curr.next;
//         }
//         curr.next = node;
//       }
//       this.size++;
//     }
  
//     isEmpty() {
//       return this.size === 0;
//     }

//     print() {
//         if (this.isEmpty()) {
//           console.log("List is empty");
//         } else {
//           let curr = this.head;
//           let listValues = "";
//           while (curr) {
//             listValues += `${curr.value} `;
//             curr = curr.next;
//           }
//           console.log(listValues);
//         }
//       }
  
//     // Other methods for LinkedList (getSize, print, etc.)
//   }
  
//   function arrayToLinkedList(arr) {
//     const linkedList = new LinkedList();
//     arr.forEach(element => linkedList.add(element));
//     return linkedList;
//   }
  
//   const list = new LinkedList()
//   const myArray = [10, 20, 30, 40];
//   const linkedList = arrayToLinkedList(myArray);
//   list.print()
  
//   // You can now use the linkedList object
  