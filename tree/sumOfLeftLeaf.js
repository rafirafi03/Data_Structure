function leftLeafs(root,isLeft) {
    let sum = 0
    if(!root) {
        return 
    }

    if(!root.left && !root.right && isLeft) {
        sum += root.value
    }
    
    this.leftLeafs(root.left,true)
    this.leftLeafs(root.right,false)

    return sum
}

function sumOfLeftLeafs(root) {

    return this.leftLeafs(root,false)
} 

