
class Hash {
    constructor(size) {
        this.items = new Array(size)
        this.size = size
    }

    hash(key) {

        let hashedVal = 0;

        for(let i =0; i < key.length; i++) {
            
            hashedVal += key.charCodeAt(i)
        }

        return hashedVal % this.size
    }

    set(key,val) {
        const index = this.hash(key) 
        let bucket = this.items[index]
        if(!bucket) {
            this.items[index] = [[key,val]]
        } else {
            const sameItemKey = bucket.find(item => item[0] === key ) 
            if (sameItemKey) {
                sameItemKey[1] = val
            } else {
                bucket.push([key,val])
            }
        }
    }

    get(key) {
        const index = this.hash(key)
        const bucket = this.items[index]
        if(bucket) {
            const sameItemKey = bucket.find(item => item[0] === key)

        if(sameItemKey) {
            return sameItemKey[i]
        }
    }
    return undefined
    }

    remove(key) {
        const index = this.hash(key)
        const bucket = this.items[index]
        if (bucket) {
            const sameItemKey = bucket.find(item => item[0] === key ) 
                if (sameItemKey) {
                    bucket.splice(bucket.indexOf(sameItemKey),1)
                }           
        }
    }

    print() {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i]) {
                console.log(this.items[i]);
            }
            
        }
    }
}

const hash = new Hash(50)

hash.set('mane','rafi')
hash.set('name','ali')

hash.print()




