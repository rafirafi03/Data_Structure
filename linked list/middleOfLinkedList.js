class Node {
    constructor(value) {
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

    getSize() {
        return this.size
    }

    append(value) {
        let node = new Node(value)
        if(this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            node.prev = this.tail;
            this.tail = node
        }
        this.size++
    }

    print() {
        if(this.isEmpty()) {
            console.log('List is empty')
        } else {
        let curr = this.head
        let listedValues = ""
        while(curr) {
            listedValues += `${curr.value} `
            curr = curr.next
        }
        console.log(listedValues)
    }
    }

    findMiddle () {
        if(this.isEmpty()) {
            console.log('List is empty')
        } else {
            let curr = this.head
            let pointer = this.head
            while (pointer.next && pointer.next.next) {
                curr = curr.next;
                pointer = pointer.next.next
            }
            console.log(curr.value);
        }
    }
}

let list = new linkedList()

list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.append(50)
list.print()
list.findMiddle()