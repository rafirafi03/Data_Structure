
// function jagged(arr) {
//     let arr1 = []
//     for(let i = 0;i<arr.length;i++) {
//         if(Array.isArray(arr[i])) {
//             arr1 = arr1.concat(jagged(arr[i]))
//         } else {
//             arr1.push(arr[i])
//         }
//     }

//     return arr1
// }

// let arr = [4,6,9,[4,5,[5]]]

// let res = jagged(arr)

// console.log(res)






// function recursion (arr) {

//     let arr1 = []

//     for( let i = 0 ; i < arr.length ; i ++ ) {
//         if(Array.isArray(arr[i])) {
//             arr1 = arr1.concat(recursion(arr[i]))
//         } else {
//             arr1.push(arr[i])
//         }
//     }

//     return arr1

// }

// let arr = [1,2,[3,4,[5]]]

// let res = recursion(arr)

// console.log(res)


// function recursion(arr) {

//     let arr1 = []

//     for(let i = 0 ; i < arr.length; i ++ ) {
//         if(Array.isArray(arr[i])) {
//             arr1 = arr1.concat(recursion(arr[i]))
//         } else {
//             arr1.push(arr[i])
//         }
//     }

//     return arr1
// }


// let arr = [1,2,[3,4,[5,6]]]
// let res = recursion(arr)

// console.log(res);


function jagged(arr) {

    if(arr.length <=1) {
        return arr
    }

    let arr1 = []

    for(let i=0 ; i < arr.length; i++ ) {
        if(Array.isArray(arr[i])) {
            arr1 = arr1.concat(jagged(arr[i]))
        } else {
            arr1.push(arr[i])
        }
    }

    return arr1
}

let arr = [1,2,3,[4,5,[6,7]]]

let res = jagged(arr)

console.log(res);