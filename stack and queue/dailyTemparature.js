function dailyTemparature(temperatures) {

    let n = temperatures.length

    let ans = new Array(n).fill(0)

    let stack = []

    for(let i = 0 ; i < n; i ++ ) {
        while(stack.length > 0 && temperatures[i] > temperatures[stack[stack.length-1]]) {
            let index = stack.pop()
            ans[index] = i-index 
        }
        stack.push(i)
    }
    return ans  
};

let arr = [73,74,75,71,69,72,76,73]

let res = dailyTemparature(arr)

console.log(res);