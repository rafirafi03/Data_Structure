
class Queue {
    constructor(size) {
        this.items = new Array(size)
        this.size = size
        this.rear = -1
        this.first = -1
        this.currLength = 0

        console.log(this.first,this.rear);
    }

    isFull () {
        return this.currLength === this.size
    }

    isEmpty() {
        return this.currLength === 0
    }

    enqueue(val) {
        if(!this.isFull()) {
            this.rear = (this.rear + 1) % this.size
            this.items[this.rear] = val
            this.currLength += 1

            if (this.first === -1) {
                this.first = this.rear
            }
            console.log(this.rear,this.first);
        }

        
    }

    dequeue() {
        if(this.isEmpty()) {
            console.log('Queue is empty')
        } else {

            const items = this.items[this.first]
            this.items[this.first] = null
            this.first = (this.first+1) % this.size
            this.currLength--

            if(this.isEmpty()) {
                this.rear = -1
                this.first = -1
            }
            return items  
        }    
    }

    peek() {
        if(this.isEmpty()) {
            console.log('list is empty');
        } else {
            return this.items[this.first]
        }
    }

    print() {
        console.log("ethiii");
        if (this.isEmpty()) {
            console.log('queue is empty')
        } else {
            let i
            let str = " "
            console.log(this.rear,"reaerr");
            console.log(this.first,"frstttt");

            for(i = this.first ; i !== this.rear ; i = (i+1) % this.size) {
                str += this.items[i] + " "
            }

            str += this.items[i]
            console.log(str);
        }
    }

}

const queue = new Queue(5)

queue.enqueue(5)
queue.enqueue(5)
queue.enqueue(5)

queue.print()

queue.dequeue()

queue.print()
