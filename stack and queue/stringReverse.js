
// function reverse(str) {
//     let arr = []
//     let reversedStr = ""

//     for (let i = 0; i < str.length; i++) {
//         arr.push(str[i]);
        
//     }

//     while(arr.length > 0) {
//         reversedStr += arr.pop()
//     }

//     return reversedStr

// }



function reverse(str) {
    let arr = []
    let value = ""

    for(let i = 0 ; i < str.length ; i++) {
        arr.push(str[i])
    }

    while(arr.length >0) {
        value += arr.pop()
    }

    return value
}

const str = 'hello world'

let res = reverse(str)

console.log(res)