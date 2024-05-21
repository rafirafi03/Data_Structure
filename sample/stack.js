class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.size = 0
    }
}

class Stack {
    constructor(){
        this.top = null
        this.tail = null
    }

    isEmpty() {
        return this.size === 0
    }

    push(val) {

        let node = new Node(val)

        if(this.isEmpty()) {
            this.top = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    pop(){
        if(this.isEmpty()) {
            console.log('empty');
        } else {
            this.tail = null
            this.size--
        }
    }

    print() {
        if (this.isEmpty()) {
            console.log('empty');

        } else {
            let curr = this.top

            while(curr) {
                console.log(curr.val);
                curr = curr.next
            }


            
        }
    }
}

let stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)

stack.print()

