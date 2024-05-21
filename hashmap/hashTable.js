
class hashTable {
    constructor(size) {
        this.items = new Array(size)
        this.size = size
    }

    hash(key) {
        let hashKey = key.toString()
        let hashedVal = 0;
        for (let i = 0; i < hashKey.length; i++) {
            hashedVal += hashKey.charCodeAt(i);
        }
        return hashedVal % this.size
    }

    set(key,val) {
        const index = this.hash(key)
        this.items[index] = val
    }

    get(key) {
        const index = this.hash(key)
        return this.items[index]
    }

    remove(key) {
        const index = this.hash(key)
        delete this.items[index]
    }

    print() {
        for (let i = 0; i < this.items.length; i++) {
            if(this.items[i]) {
                console.log(i,this.items[i])
            }
            
        }
    }
}

const hash = new hashTable(50)

hash.set("mane","rafi")
hash.set("name","Ali")

hash.print()

hash.remove("name")
hash.print()