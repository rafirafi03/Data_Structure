// ---------------------------     Queue using object


class Queue {
    constructor() {
        this.items = {}
        this.rear = 0
        this.front = 0
    }

    enqueue(val) {
        this.items[this.rear] = val
        this.rear++
    }

    dequeue() {
        const items = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return items
    }

    isEmpty() {
        return this.rear - this.front === 0
    }

    peek() {
        return this.items[this.front]
    }

    size() {
        return this.rear - this.front
    }

    print() {
        console.log(this.items)
    }
}

const queue = new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.print()

console.log(queue.dequeue());
console.log(queue.peek());
queue.print()
