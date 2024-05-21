class Node  {
    constructor() {
        this.children = {}
        this.isEnd = false
    }  

}

class Trie {
    constructor() {
        this.root = new Node()
    }

    insert(word) {
        let curr = this.root

        for( let val of word) {
            if(!curr.children[val]) {
                curr.children[val] = new Node()
            }
            curr = curr.children[val]
        }
        curr.isEnd = true
    }

    startWithPrefix(word) {
        let curr = this.root

        for(let val of word) {
            if(!curr.children[val]) {
                return 'No matching prefix'
            }

            curr = curr.children[val]
        }

        this.display(curr, word)
    }

    display(root, prefix = "") {
        if (root.isEnd) {
            console.log(prefix)
        }

        for( let val in root.children) {
            this.display(root.children[val],prefix+val)

        }

    }

    search(word) {

        let curr = this.root

        for(let val of word) {
            if(!curr.children[val]) {
                return false
            }

            curr = curr.children[val]
        }

        if(curr.isEnd) {
            return true
        } else {
            return false
        }
    }

    delete(word) {
        this.deleteHelper(this.root, word, 0)
    }

    deleteHelper(root, word, level) {
        if (root == null) {
            console.log(level,"lvelllll")
            return true
        }

        if (word.length == level) {
            if (root.isEnd) {
                console.log(level,"wird.lngthhh");
                root.isEnd = false
            }
            return Object.keys(root.children).length == 0
        }

        let child = root.children[word[level]]
        console.log(child,'childddd');
        let deleted = this.deleteHelper(child, word, level + 1)
        console.log(deleted,'dltddddddd');

        if (deleted) {
            console.log(root.children[word[level]],"deltdiffffff")
            delete root.children[word[level]]
        }
        console.log('flss');
        return false
    }
}

let trie = new Trie()

trie.insert('ahamad')
trie.insert('aham')
trie.insert('rafi')
trie.insert('roshan')
trie.insert('man')
trie.insert('animal')

trie.delete('aham')



