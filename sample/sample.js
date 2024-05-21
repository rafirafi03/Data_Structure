function sellstock(arr) {

    let smallest = Infinity
    let profit = 0 

    for(let i = 0 ; i < arr.length ; i ++ ) {
        if(arr[i] < smallest) {
            smallest = arr[i]
        } else if(arr[i] - smallest > profit) {
            profit = arr[i] - smallest
        }
    }

    return profit
};

let arr = [2,1,2,1,0,1,2]

let res = sellstock(arr)

console.log(res)