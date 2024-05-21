class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
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

    append(value) {
        let node = new Node(value)
        if(this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            let prev = this.tail
            this.tail.next = node
            this.tail = node
            this.tail.prev = prev
        }
        this.size ++
    }

    deleteNode(value) {

        if(this.isEmpty()) {
            console.log('List is empty');
        }
        
        let curr = this.head

        while(curr.value !== value) {
            curr = curr.next
        }

        if(curr) {
            if(curr === this.head) {
                this.head = curr.next
                curr.next = null
                this.head.prev = null
                return
            }
            if(curr === this.tail) {
                this.tail = curr.prev
                curr.prev = null
                this.tail.next = null
            } else {
                curr.prev.next = curr.next
                curr.next.prev = curr.prev
            }
        }

    }

    print() {
        if(this.isEmpty()) {
            console.log('List is empty')
        } else {
            let curr = this.head
            let listValues = ""
            
            while (curr) {
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues)
        }
    }

}

const list = new linkedList()

list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.print()
list.deleteNode(30)
list.print()
list.deleteNode(10)
list.print()