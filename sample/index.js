

function merge(arr) {

    if(arr.length <= 1) {
        return arr
    }

    let middle = arr.length/2
    let left = arr.slice(0,middle)
    let right = arr.slice(middle)

    return Sort(merge(left),merge(right))

}

function Sort(left,right) {

    let sortArr = []
    let i=0;
    let j=0;

    while(i<left.length && j<right.length) {
        if(left[i]<right[j]) {
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

    while(j<right.length) {
        sortArr.push(right[j])
        j++
    }

    return sortArr

}

let arr = [2,7,3,8,6,2,66,8]

let res = merge(arr)

console.log(res);