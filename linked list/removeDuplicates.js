const { link } = require("fs")
const { run } = require("node:test")

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

    append (value) {
        let node = new Node(value)

        if(this.isEmpty()) {
            this.head = node
            this.tail = node
            
        } else {
            this.tail.next = node
            this.tail = node

        }
        this.size ++
    }

    // removeDuplicate () {
    //     if(this.isEmpty()) {
    //         console.log('List is empty')
    //     } else {
    //         let curr = this.head
    //         while (curr) {
    //             let runner = curr
    //             while(runner.next) {
    //                 if(curr.value === runner.next.value) {
    //                     runner.next = runner.next.next
    //                     this.size--
    //                 } else {
    //                     runner = runner.next
    //                 }
    //             }
    //             curr = curr.next
    //         }
    //     }
    // }



    print() {
        if(this.isEmpty()) {
            console.log('List is empty')
        } else {
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

let list = new linkedList()

list.append(30)
list.append(20)
list.append(30)
list.append(20)
list.append(10)

list.print()

list.removeDuplicate()

list.print()
