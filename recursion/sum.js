
// function sum(arr,index=0) {


//     while(size >= 0) {
//         return sum()
//     }
// }


// let arr = [2,4,65,2,5]

// let res = sum(arr)

// console.log(res)





// -----------------------------------    Sum ---------------------------------------------

// let s = 0
// function sum(a) {
//     if(a == 0){
//         return s
//     } else {
//         s += a
//         return sum(a-1)
//     }
// }

// console.log(sum(5))

// let count = 0
// function sum(a) {
    
//     if(a === 0) {
//         return count
//     } else {
//         count +=  a

//         return sum(a-1)

//     }

    
// }

// console.log(sum(5));



let sum = 0
function recursion(num) {
    if(num === 0) {
        return sum
    } else {
        sum += num
        return recursion(num-1)
    }
}

let res = recursion(5)

console.log(res)