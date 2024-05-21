// let arr = [[4,8],[4,3],[[5,4]]]

// let res = []

// for( let i=0; i< arr.length; i ++ ) {
//     for(let j=0;j<arr[i].length;j++) {
//         if(arr[i] === Array.isArray) {
//             let a = arr[i][0][j]
//             res.push(a)
//         } else {
//             res.push(arr[i][j])
//         }
        
//     }
// }

// console.log(res)




// function largest (arr) {

//     let largest = arr[0]
//     let secondLargest = 0
//     let smallest = arr[0]
//     let secondSmallest = Infinity

//     for(let i = 1 ; i<=arr.length;i++) {
//         if(arr[i] > largest) {
//             secondLargest = largest
//             largest = arr[i]
//         } else if (arr[i] > secondLargest) {
//             secondLargest = arr[i]
//         }

//         if(arr[i] < smallest) {
//             secondSmallest = smallest
//             smallest = arr[i]
//         } else if (arr[i] < secondSmallest) {
//             secondSmallest = arr[i]
//         }
//     } 

//     console.log('secondLargest: ',secondLargest)
//     console.log('secondSmallest: ',secondSmallest);

// }


// let arr = [1,2,3,14,5,6,7,8,9]
// largest(arr)



class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class linkedList {
    constructor () {
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
            this.tail.next = node
            this.tail = node
        }
        this.size++

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

    deleteDuplicates() {
        let curr = this.head

        while(curr.next) {
            if(curr.value ===curr.next.value) {
                curr.next = curr.next.next
                this.size--
            } else {
                curr = curr.next
            }
        }
    }
}

const list = new linkedList()

list.append(10)
list.append(20)
list.append(10)
list.append(30)
list.append(40)
list.append(30)

list.print()
list.deleteDuplicates()
list.print()