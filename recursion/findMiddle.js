
function middle(arr,tar) {
    return search(arr,tar,0,arr.length)
}

function search(arr,tar,left,right) {

    if(left > right) {
        return -1
    }
    let center = Math.floor((right + left) /2)

    if(arr[center] === tar) {
        return center
    }

    if(tar < arr[center]) {
        return search(arr,tar,left,center-1)
    } else {
        return search(arr,tar,center+1,right)
    }
}

let arr = [1,2,3,4,5,6,7,8,9]

let res = middle(arr,4)

console.log(res);

