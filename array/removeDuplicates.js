function removeDuplicates(arr) {
    let map = new Map
    let n = 0
    for ( let i = 0 ; i < arr.length ; i ++ ) {
        if ( !map.get( arr[i] ) ) {
            map.set(arr[i],true)
            arr[n] = arr[i]
            n++
        }
    }
    arr.length = n
    return arr
}

let arr = [6,2,7,4,7,2,6,9]

console.log(removeDuplicates(arr))