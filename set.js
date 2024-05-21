// this is how creating a set
const set = new Set([1,2,3])

// adding values to set
set.add(4)

// checking if given value is in the set
console.log(set.has(4))

// deleting a value from set
set.delete(3)

// checking the size of the set
console.log(set.size);

// clearing the set / deleting all values form set
set.clear()

// iterating over the set
for (const item of set) {
    console.log(item)
}