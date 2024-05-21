
function recursion (arr,tar) {
    return center(arr,tar,0,arr.length)
    
}

function center(arr,tar,left,right) {

    if(left > right) {
        return -1
    }

    let middle = Math.floor((left+right) / 2)

    if(arr[middle] === tar) {
        return middle
    } else {
        if(arr[middle] > tar) {
            return center(arr,tar,left,middle-1)
        } else {
            return center(arr,tar,middle+1,right)
        }
    }

}



let arr = [1,2,3,4,5,6,7,8,9]

let res = recursion(arr,4)

console.log(res)