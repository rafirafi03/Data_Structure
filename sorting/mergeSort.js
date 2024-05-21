
let arr = [5, 10, 18, 2, 1, 7,9]


// function mergeArr(arr) {
//     if (arr.length <= 1) {
//       return arr
//     }
  
//     let middle = Math.floor(arr.length / 2)
//     let left = arr.slice(0, middle)
//     console.log(left,"mdl")
    
//     let right = arr.slice(middle)
//     console.log(right,"rgt")

  
//     return sortMergeArray(mergeArr(left), mergeArr(right))
//   }
  
//   function sortMergeArray(left, right) {
    
//     let sortedArr = []
//     let i = 0
//     let j = 0
  
//     while (i < left.length && j < right.length) {
//       if (left[i] < right[j]) {
//         sortedArr.push(left[i])
//         i++
//       } else {
//         sortedArr.push(right[j])
//         j++
//       }
//     }
  
//     while (i < left.length) {
//       sortedArr.push(left[i])
//       i++
//     }
//     while (j < right.length) {
//       sortedArr.push(right[j])
//       j++
//     }
  
//     return sortedArr
//   }
  
//   console.log(mergeArr(arr));


// function mergeSort(arr) {

//   if(arr.length <= 1) {
//     return arr
//   }

//   let middle = Math.floor(arr.length/2)
//    let left = arr.slice(0,middle)
//   let right = arr.slice(middle)


//   return Sort(mergeSort(left),mergeSort(right))

// }

// function Sort(left,right) {

//   let sortedArr = []
//   let i = 0;
//   let j = 0;

//   while(i<left.length && j < right.length) {
//     if(left[i] < right[j]) {
//       sortedArr.push(left[i])
//       i++
//     } else {
//       sortedArr.push(right[j])
//       j++
//     }
//   }

//   while(i<left.length) {
//     sortedArr.push(left[i])
//     i++
//   }

//   while(j<right.length) {
//     sortedArr.push(right[j])
//     j++
//   }

//   return sortedArr
// }

// let res = mergeSort(arr)

// console.log(res)


function merge(arr) {

  if(arr.length <=1) {
    return arr
  }
  
  let middle = Math.floor(arr.length/2)
  let left = arr.slice(0,middle)
  let right = arr.slice(middle)

  return Sort(merge(left),merge(right))

}

function Sort(left,right) {

  let sortArr = []
  let i=0
  let j=0
  while(i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sortArr.push(left[i])
      i++
    } else {
        sortArr.push(right[j])
        j++
    }
  }

  while(i<left.length) {
    sortArr.push(left[i])
    i++
  }

  while(j<right[j]) {
    sortArr.push(right[j])
    j++
  }

  return sortArr

}

let res = merge(arr)

console.log(res)