// interview quetion shallow copy & deep copy


const objNew=new Object()  //to create  new object we use this word
console.log({objNew},typeof(objNew))

const ObjNew={
    fName:"AMan SHukla"
}

ObjNew.lastName="shukla"
const newObj=Object.freeze(ObjNew)  //if we want do not anything else then this word we use 
ObjNew.std="shukla"

console.log(ObjNew)

objNew.toLocaleString()
console.log({objNew})

// if we want to add 2 object then use 
const newobjj={...ObjNew,...objNew}
console.log({newobjj})




 
