
function findBoth(arr,no1,no2) {

let no1val = false
let no2val = false

for ( let i = 0 ; i < arr.length ; i ++ ) {
    if ( arr[i] === no1 ) {
        no1val = true
    } else if ( arr[i] === no2 ) {
        no2val = true
    }

    if (no1val && no2val) {
        return true
    }
}

return false

}

let arr = [3,6,4,87,3,5]
let no1 = 6
let no2 = 8

let result = findBoth(arr, no1,no2)

console.log(result)