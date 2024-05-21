class Stack {
    constructor() {
        this.items = []
    }

    isEmpty() {
        return this.items.length === 0
    }

    push(val) {
        this.items.push(val)
    }

    pop() {
        return this.items.pop()
    }

    peek() {
        return this.items[this.items.length-1]
    }
}

let stack = new Stack()

function parantheses (str) {

    for(let i = 0; i < str.length; i++) {
        if(str[i] === '{' || str[i] === '(' ||  str[i] === '[') {
            stack.push(str[i])
        } else if(str[i] === '}' && !stack.isEmpty() && stack.peek() === '{') {
            stack.pop()
        }else if(str[i] === ')' && !stack.isEmpty() && stack.peek() === '(') {
            stack.pop()
        }else if(str[i] === ']' && !stack.isEmpty() && stack.peek() === '[') {
            stack.pop()
        } else {
            return false
        }
    }

    return stack.isEmpty()

}

let str = "{}()[]"
let res = parantheses(str)

console.log(res);