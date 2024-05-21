

// ---------------------------------   Factorial of array using recursion --------------------------------------

// function factorial(arr, index = 0) {

//   if (index === arr.length) {
//     return 1
//   }
//   return sum = arr[index] * factorial(arr, index + 1)
// }

// console.log(factorial([1, 2, 3, 4, 5, 6, 7]));






let sum = 1
function factorial(val,index = 0) {

  if (index === val.length) {
    return sum
  } else {
    sum *= val[index]
    return factorial(val,index+1)
  }
}

let arr = [1,2,3]

let res = factorial(arr)

console.log(res)

