// function quickSort(arr) {

//     if(arr.length <=1 ) {
//         return arr
//     }

//     let pivot = arr[arr.length-1]
//     let left = []
//     let right = []

//     for(let i = 0 ; i < arr.length-1 ; i ++ ) {
//         if(arr[i] > pivot ) {
//             right.push(arr[i])
//         } else {
//             left.push(arr[i])
//         }
//     }

//     return [...quickSort(left),pivot,...quickSort(right)]
// }


function quickSort(arr) {

    if(arr.length <=1) {
        return arr
    }
    
    let pvt = arr[arr.length-1]
    let left = []
    let right = []

    for(let i = 0 ; i < arr.length-1; i ++ ) {
        if(arr[i] < pvt) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return [...quickSort(left),pvt,...quickSort(right)]
}



let arr = [5,8,2,3,99,1,5,88]

let res = quickSort(arr)

console.log(res)