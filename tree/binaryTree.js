class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class Tree {
    constructor() {
        this.root = null
    }

    // To Insert Values
    insert(value) {
        let node = new Node(value)

        if(this.root == null) {
            this.root = node
        } else {
            let curr = this.root 

            while(curr) {
                if( value > curr.value) {
                    if(curr.right == null) {
                        curr.right = node
                        break
                    } else {
                        curr = curr.right
                    }
                } else if(value < curr.value) {
                    if(curr.left == null) {
                        curr.left = node
                        break
                    } else {
                        curr = curr.left
                    }
                }
            }
        }
    }

    // PreOrder Traversal
    preOrder(root) {
        if(root) {
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }       
    }

    // InOrder Traversal
    inOrder(root) {
        if(root) {
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }

    // PostOrderTraversal
    postOrder(root) {
        if(root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }

    // Search Function
    search(value) {

        let curr = this.root

        while(curr) {
            if(value == curr.value) {
                return true
            } 

            if(value > curr.value) {
                curr = curr.right
            } else {
                curr = curr.left
            }
        }

        return false
    }

    // To find the smallest value in BST
    min(root) {      
        if(root.left) {
            return this.min(root.left)
        } else {
            return root.value
        }
    }

    // To find the largest value in BST
    max() {
        let curr = this.root

        while(curr.right) {
            curr = curr.right
        }

        return curr.value
    }

    // To print in levelWise
    levelWise() {
        let queue = []

        queue.push(this.root)

        while(queue.length) {
            let curr = queue.shift()
            console.log(curr.value);

            if(curr.left) {
                queue.push(curr.left)
            }
            if(curr.right) {
                queue.push(curr.right)
            }
        }
    }

    // To get the sum of all elements in BST
    sumOfAllElement(root) {
        let sum = 0;

        if(root) {
            if(root.left) {
                sum += this.sumOfAllElement(root.left)
            }
            if(root.right) {
                sum += this.sumOfAllElement(root.right)
            }
            sum += root.value
        }
        return sum
    }

    // To get the count fo leaf Node in BST
    countLeafNodes(node = this.root) {
        if (!node) return 0;
        if (!node.left && !node.right) return 1;
        return this.countLeafNodes(node.left) + this.countLeafNodes(node.right);
    }

    // To get the sum of Second Highest and Second Lowest value in BST
    SumOfsecHighLow() {
        
        if(!this.root || (!this.root.left && !this.root.right)) {
            console.log('no values')
            return 
        }
        
        let secLow = null
        let secHigh = null
        
        if(!this.root.left) {
            secLow = this.root.right 
        }
        
        if(!this.root.right) {
            secHigh = this.root.left
        }
        
        if(!secLow) {
            let curr = this.root
            let prev = null
            
            while(curr.left) {
                prev = curr
                curr = curr.left
            }
            
            secLow = prev ? prev : null
            
        }
        
        if(!secHigh) {
            let curr = this.root
            let prev = null
            
            while(curr.right) {
                prev = curr
                curr = curr.right
            }
            
            secHigh = prev ? prev : null
        }
        
        if(!secLow || !secHigh) {
            console.log('no values')
            return
        }
        
        console.log(secLow.val+secHigh.val)
        
    }
}

let tree = new Tree()

tree.insert(15)
tree.insert(11)
tree.insert(10)
tree.insert(1)
tree.insert(60)
tree.insert(30)
tree.insert(12)

console.log(tree.countLeafNodes())

// tree.levelWise()

// console.log("--------");

// console.log(tree.max())

// console.log(tree.search(150))

// console.log('--------')

// tree.preOrder(tree.root)

// console.log('-------')

// console.log(tree.sumOfAllElement(tree.root))




























// class Tree {
//     constructor (value) {
//         this.value = value
//         this.left = null
//         this.right = null
//         this.size = 0
//     }
// }

// class List {
//     constructor () {
//         this.root = null
//     }


//     insert(value) {
//         let node = new Tree(value)

//         if(!this.root) {

//             this.root = node
//             return

//         }

//         let curr = this.root

//             while(curr) {
//                 if(value < curr.value) {
//                     if(curr.left === null) {
//                         curr.left = node
//                         break
//                     } else {
//                         curr = curr.left
//                     }
//                 } else {
//                     if(curr.right === null) {
//                         curr.right = node
//                         break
//                     } else {
//                         curr = curr.right
//                     }
//                 }
//             }

//     }

//     preOrder(root) {
//         if(root) {
//             console.log(root.value)
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }

//     inOrder(root) {
//         if(root) {
//             this.inOrder(root.left)
//             console.log(root.value)
//             this.inOrder(root.right)
//         }
//     }

//     postOrder(root) {
//         if(root) {
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value);
//         }
//     }
    
//     search(val) {

//         let curr = this.root

//         while(curr) {
//             if(curr.value == val) {
//                 return true
//             }else if(val > curr.value) {
//                 curr = curr.right
//             } else {
//                 curr = curr.left
//             }
//         }

//         return false
//     }

//     min(root) {
//         if(root.left) {
//             return this.min(root.left)
//         }
//         return root.value
//     }

//     max(root) {
//         if(root.right) {
//             return this.max(root.right)
//         }
//         return root.value
//     }

//     levelWise() {
//         let queue = []

//         queue.push(this.root)

//         while(queue.length) {
//             let curr = queue.shift()
//             console.log(curr.value);

//             if (curr.left) {
//                 queue.push(curr.left)
//             }
//             if(curr.right) {
//                 queue.push(curr.right)
//             }
//         }
//     }

//     rangeSumBST(root,low,high) {
//         let sum =0;

//         if(root) {
//             sum += this.rangeSumBST(root.left,low,high)
//             sum += this.rangeSumBST(root.right,low,high)

//             if(root.value >= low && root.value <= high) {
//                 return sum + root.value
//             }
//         }
//         return sum
//     }

//     delete() {
//         this.root = this.deleteHelper(this.root,val)
//     }

//     deleteHelper(root, val) {
//         if(!root) {
//             return null
//         }

//         if(val < root.value) {
//             root.left = this.deleteHelper(root.left,val)
//         } else if(val > root.value) {
//             root.right = this.deleteHelper(root.right,val)
//         } else {
//             if(!root.left && !root.right) {
//                 return null
//             } 
//             if(!root.right) {
//                 return root.left
//             } else if(!root.left) {
//                 return root.right
//             }

//             root.value = this.min(root.right) 
//             root.right = this.deleteHelper(root.right, root.data)
            
//         }
//         return root
//     }  

// }

// let tree = new List()

// tree.insert(10)
// tree.insert(5)
// tree.insert(15)
// tree.insert(3)
// tree.insert(7)
// tree.insert(12)
// tree.insert(16)
// tree.insert(2)
// tree.insert(4)
// tree.insert(6)
// tree.insert(8)



// // tree.preOrder(tree.root)
// // tree.inOrder(tree.root)