// sets is collection on new value 
// its work like array but it  is not in order & can't repepative

//create set in js 

const set=new Set()


// add method

set.add(1)
set.add(2)
set.add(3)
set.add(1)
set.add(2)
set.add(3)
set.add(1)
set.add(2)
set.add(3)

console.log(set)

// for length in sets we use size method

console.log(set.size)


// value include have or not for use has()
console.log(set.has(7))

//iterate sets over the value 

for (let setValue of set) {
console.log({setValue})
    
}


//for delete we use delete key word

console.log(set.delete(2),"aman")
console.log(set)


//for unic data we use set

for (const iterator of set) {
    console.log(iterator)
}


// for unique value we are using this
let myArr=[2,3,3,2,2,2,43,3,223,234,2,32]
const setNew=[...new Set(myArr)]
console.log(setNew)

// we use split like this
let value="anab"
console.log([...new Set(value)])

