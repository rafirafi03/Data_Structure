// given an array nums of size N , return the majority elements always exists in the array
// the majority elements is the elements that appears more than [n/2] times. you may assume 
// that the majority elements always exists in the array

function frequency(arr){
    let n=arr.length/2
    let map=new Map()

    for(let i=0;i<arr.length;i++){
        if(map.has(arr[i])){
          map.set(arr[i],map.get(arr[i])+1)
        }else{
            map.set(arr[i],1)
        }
    }
    for (let [key, value] of map) {
        if (value > n) {
            return key;
        }
    }
}

let arr = [2,2,2,3,4,3,2,2,2,6]
let res = frequency(arr)
console.log(res);

