// -------------------------------------      Bubble sorting     -------------------------------------------------------


let arr = [3,2,77,56,9,4,91,65,223]

for ( let i = 0 ; i < arr.length ; i ++ ) {
    for ( let j = 0 ; j < arr.length-1-i ; j ++ ) {
        if ( arr[j] > arr[j+1] ) {
            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }
    }
}

console.log(arr)

