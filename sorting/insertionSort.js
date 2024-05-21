// -------------------------------------      Insertion sorting     -------------------------------------------------------

let arr = [3,2,77,56,9,4,91,65,3]

for ( let i = 0 ; i < arr.length ; i ++ ) {
    let curr = arr[i]
    let j = i - 1

    while( j >= 0 && arr[j] > curr ) {
        arr[ j+1 ] = arr[ j ]
        j--
    }

    arr[j+1] = curr
}

console.log(arr)