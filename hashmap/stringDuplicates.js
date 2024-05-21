
let map = new Map()

function duplicate(str) {

    let dup = []
    for(let i = 0 ; i < str.length; i ++ ) {
        if(!map.has(str[i])) {
            map.set(str[i],true)
        } else {
            dup.push(str[i])
        }
    }

    return dup

}

let str = "rafii"
let res = duplicate(str)

console.log(res)
