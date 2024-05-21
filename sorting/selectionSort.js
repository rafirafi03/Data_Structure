// -------------------------------------      selection sorting     -------------------------------------------------------


let arr = [3,2,77,56,9,4,91,65,223]

for ( let i = 0 ; i < arr.length ; i ++ ) {
    for ( let j = i + 1 ; j < arr.length ; j ++ ) {
        if ( arr[i] > arr[j] ) {
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
}

console.log(arr)