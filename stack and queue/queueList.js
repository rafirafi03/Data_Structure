// ------------------------------------------    Queue using List   ------------------------------------------------


class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class List {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    enqueue(val) {
        let node = new Node(val)

        if (this.head === null) {
            this.head = node
            this.tail = node
            
        } else {
            this.tail.next = node
            this.tail = node
        }

        this.size++
    }

    dequeue() {
        this.head = this.head.next
        this.size--
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    print() {
        if (this.isEmpty()) {
            console.log('list is empty');
        } else {
            let values = ""
            let curr = this.head

            while(curr) {
                values += `${curr.val} `
                curr = curr.next
            }
            console.log(values)

        }
    }

    peek() {
        return this.head.value
    }
}

let list = new List

list.enqueue(10)
list.enqueue(20)
list.enqueue(30)
list.enqueue(40)

list.dequeue()

list.print()