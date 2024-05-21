

// function palindrome (str) {
//     if(str.length <=1 ) {
//         return true
//     }

//     if(str[0] !== str[str.length-1]){
//         return false
//     }

//     return palindrome(str.slice(1,str.length-1))
// }

// let str = "str"

// let res = palindrome(str)

// console.log(res)




function recursion (str) {

    if(str.length == 1) {
        return true
    }

    if(str[0] !== str[str.length-1]) {
        return false
    } else {
        return recursion(str.slice(1,str.length-1))
    }
}

let str = "malayalam"

let res = recursion(str) 

console.log(res)