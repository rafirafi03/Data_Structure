
function binarySearch (arr,tar) {

    let left = 0
    let right = arr.length-1

    while ( left <= right ) {
        let middle = Math.floor( right + left / 2 )
        if ( arr[middle] == tar ) {
            return middle
        }

        if ( arr[middle] > tar ) {
            right = middle-1
        } else {
            left = middle+1
        }
    }

    return -1

}

let arr = [1,2,3,4,5,6,7,8,9,10]
let tar = 5

let result = binarySearch(arr,tar)

console.log(result)

