// class Node {
//     constructor(val) {
//         this.val = val
//         this.next = null
//     }
// }

// class listStack {
//     constructor() {
//         this.top = null
//         this.size = 0
//     }

//     push(val) {
//         const node = new Node(val)
//         if (this.top === null) {
//             this.top = node
//         } else {
//             node.next = this.top
//             this.top = node
//         }
//         this.size++
//     }

//     pop() {
//         this.top = this.top.next
//     }

//     peek() {
//         return this.top.val
//     }

//     print() {
//         let curr = this.top
//         while(curr) {
//             console.log(curr.val)
//             curr = curr.next
//         }
//         console.log("------")
//     }

//     reverse() {

//         let strArr = []
//         let str = ""
//         let curr = this.top
        
//         while(curr) {
//             strArr.push(curr.val)
//             curr = curr.next
//         }

//         while(strArr.length > 0) {
//             str += strArr.pop() + " "
//         }

//         console.log(str); 
//     }


// }

// const stackList = new listStack()

// stackList.push(10)
// stackList.push(20)
// stackList.push(30)
// stackList.push(40)

// stackList.print()

// stackList.pop()

// stackList.print()

// stackList.reverse()


// class Node {
//     constructor(val) {
//         this.val = val
//         this.next = null
//     }
// }

// class Stack {
//     constructor() {
//         this.top = null
//         this.size = 0
//     }

//     push(val){
//         let node = new Node(val)
//         if(this.top === null) {
//             this.top = node
//         } else {
//             node.next = this.top
//             this.top = node
//         }

//         this.size++
//     }

//     pop() {
//         this.top = this.top.next
//         this.size--
//     }

//     peek() {
//         console.log(this.top.val)
//     }

//     removeFromMiddle() {
//         let middle = this.size % 2 === 0 ? this.size/2 : Math.floor((this.size / 2) + 1)
//         let curr = this.top
//         let temp = curr
//         let n = 1;
        
//         if(this.size <=2 ) {
//             console.log('no middle')
//         } else {
//             while(n<=middle) {
//                 if(n === middle) {
//                     temp.next = curr.next
//                     n++
//                     this.size--
//                 } else {
//                     temp = curr
//                     curr = curr.next
//                     n++
//                 }
//             }
//         }


//     }

//     print() {
//         let values = ""
//         let curr = this.top

//         while(curr) {
//             values += curr.val + " "
//             curr = curr.next
//         }

//         console.log(values)
//     }

//     reverse() {
//         let curr = this.top
//         let strArr = []
//         let str = ""

//         while(curr) {
//             strArr.push(curr.val)
//             curr = curr.next
//         }

//         while(strArr.length > 0) {
//             str += strArr.pop() + "-"
//         }

//         console.log(str)

//     }


// }

// let stack = new Stack()

// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.push(40)
// stack.push(80)
// stack.push(90)


// stack.print()




// stack.removeFromMiddle()

// stack.print()
// stack.removeFromMiddle()
// stack.print()
// stack.removeFromMiddle()


// stack.print()




class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0
    }

    push(val) {
        let node = new Node(val)

        if (this.isEmpty()) {
            this.top = node
        } else {
            node.next = this.top
            this.top = node
        }
        this.size ++
    }

    pop() {

        this.top = this.top.next
        this.size--
    }

    reverse() {
        let curr = this.top

        let arr = []
        let str = ""

        while(curr) {
            arr.push(curr.val)
            curr = curr.next
        }

        while(arr.length > 0) {
            str += arr.pop() + " "
        }

        console.log(str)
    }

    peek() {
        console.log(this.top.val);
    }

    print() {
        let curr = this.top
        let arr = []

        while(curr ){
            console.log(curr.val)

            curr = curr.next
        }

    }

    removeFromMiddle() {
        let curr = this.top
        let prev = curr

        let middle = Math.floor(this.size/2)
        let n = 0

        while(n <= middle) {
            if(n === middle) {
                prev.next = curr.next
                this.size--
                n++
            } else {
                prev = curr
                curr = curr.next
                n++
            }
        }
    }
}

let stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)

stack.print()

stack.reverse()
stack.removeFromMiddle()
stack.print()
stack.peek()