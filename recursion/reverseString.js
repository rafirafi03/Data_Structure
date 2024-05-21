// function reverse(strReverse) {
//     if (strReverse.length <= 1) {
//       return strReverse
//     } else {
//       return reverse(strReverse.slice(1)) + strReverse[0]
//     }
//   }
//   let strReverse = 'alimiyan nte olakka';
//   console.log(reverse(strReverse));   












function recursion (str) {
  if(str.length <= 0) {
    return str
  }

  return recursion(str.slice(1)) + str[0] 
}

let str = "rafi"

let res = recursion(str)

console.log(res)