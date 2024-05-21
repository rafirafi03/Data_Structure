// ------------------------------------   "Hello world" to "world Hello" --------------------------------------------

// let str = "Hello world"

// let splited = str.split(" ")
// let temp = ""
// let end = splited.length-1
// console.log(splited)

// for(let i = 0 ; i<splited.length/2 ; i++) {
//     temp = splited[i]
//     splited[i] = splited[end]
//     splited[end] = temp
// }
    


// console.log(splited.join(" "))




// ------------------------------------   "Reverse String" --------------------------------------------

let str = ['h','e','l','l','o'];

let start = 0
let end = str.length-1

while(start < end) {
    [str[start],str[end]] = [str[end],str[start]]
    start++
    end--
}

console.log(str)

