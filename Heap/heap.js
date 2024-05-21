
class Heap {
    constructor() {
        this.arr = []
    }

    getParent(i) {
        return Math.floor(i-1/2)
    }

    getLeftChild(i) {
        return i*2+1
    }

    getRightChild(i) {
        return i*2+2
    }

    insert(val) {
        this.arr[this.arr.length] = val
        this.heapifyUp()
    }

    heapifyUp() {
        let index = this.arr.length-1
        while(this.arr[index] > this.arr[this.getParent(index)]) {
            this.swap(index,this.getParent(index))
            index = this.getParent(index)
        }
    }

    swap(i,j) {
        let temp = this.arr[i]
        this.arr[i] = this.arr[j]
        this.arr[j] = temp
    }

    removeRoot() {
        let root = this.arr[0]
        let last = this.arr.pop()

        if(this.arr.length > 0 ) {
            this.arr[0] = last
            this.heapifyDown(0,this.arr.length)
        }
        return root
    }

    heapifyDown(index, arrLength) {

        let largest = index
        let left = this.getLeftChild(index)
        let right = this.getRightChild(index)

        if (left < arrLength && this.arr[left] > this.arr[largest]) {
            largest = left
        }

        if (right < arrLength && this.arr[right] > this.arr[largest]) {
            largest = right
        }

        if (largest != index) {
            this.swap(index, largest)
            this.heapifyDown(largest, arrLength)
        }
    }

    buildHeap() {
        let length = this.arr.length
        for(let i = Math.floor(length/2)-1; i>=0 ; i--) {
            this.heapifyDown(i,length)
        }
    }

    heapSort() {
        this.buildHeap()

        for(let i = this.arr.length-1; i>=0 ; i--) {
            this.swap(0,i)
            this.heapifyDown(0,i)
        }
    }    

}

let heap = new Heap() 


heap.insert(10)
heap.insert(60)
heap.insert(80)
heap.insert(20)
heap.insert(56)
heap.insert(21)
heap.insert(12)




console.log(heap.arr)

heap.removeRoot()

console.log(heap.arr)
heap.heapSort()

console.log(heap.arr)

// class Heap {
//     constructor() {
//         this.arr = []
//     }

//     getParent(i) {
//         return Math.floor(i-1/2)
//     }

//     getLeftChild(i) {
//         return i*2+1
//     }

//     getRightChild(i) {
//         return i*2+2
//     }

//     insert(value) {
//         this.arr[this.arr.length] = value
//         this.heapifyUp()
//     }

//     heapifyUp() {
//         let index = this.arr.length-1
//         while(this.arr[index] < this.arr[this.getParent(index)]) {
//             this.swap(index,this.getParent(index))
//             index = this.getParent(index)
//         }
//     }

//     swap(index,parent) {
//         let temp = this.arr[index]
//         this.arr[index] = this.arr[parent]
//         this.arr[parent] = temp
//     }

//     removeRoot() {

//         let last = this.arr.pop()
//         this.arr[0] = last

//         this.heapifyDown(0,this.arr.length)
//     }

//     heapifyDown(index,arrLength) {
//         let largest = index
//         let left = this.getLeftChild(index)
//         let right = this.getRightChild(index)

//         if(right <= arrLength && this.arr[right] < this.arr[largest]) {
//             largest = right
//         }

//         if(left <= arrLength && this.arr[left] < this.arr[largest]) {
//             largest = left
//         }

        

//         if(largest !== index) {
//             this.swap(index,largest)
//             this.heapifyDown(largest,arrLength)
//         }
//     }

    

// }

// let heap = new Heap()

// heap.insert(5)
// heap.insert(10)
// heap.insert(7)
// heap.insert(3)
// heap.insert(12)
// // heap.insert(200)
// // heap.insert(454)
// // heap.insert(21)
// // heap.insert(440)
// // heap.insert(20)
// // heap.insert(60)
// // heap.insert(70)
// // heap.insert(30)
// // heap.insert(1)

// console.log(heap.arr)


// heap.removeRoot()


// console.log(heap.arr)

// heap.heapSort()

// console.log(heap.arr)


// console.log(heap.arr)




