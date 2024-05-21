let arr = [4,8,12,6,90,3]

let largest = arr[0]
let secondLargest = 0
let smallest = arr[0]
let secondSmallest = Infinity

for ( let i = 1; i < arr.length ; i ++ ) {
    if ( arr[i] > largest ) {
        secondLargest = largest
        largest = arr[i]
    } else if ( arr[i] > secondLargest ) {
        secondLargest = arr[i]
    }

    if ( arr[i] < smallest ) {
        secondSmallest = smallest
        smallest = arr[i]
    } else if ( arr[i] < secondSmallest ) {
        secondSmallest = arr[i]
    }
}

console.log(secondLargest)
console.log(secondSmallest)