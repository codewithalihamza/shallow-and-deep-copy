// Shallow Copy: it store reference of the object in their original memory and it reflect changes in shallow copy object in the original object

const shallowCopy = [{a:11},{b:2}]
const newShallowCopy = [...shallowCopy]
newShallowCopy[0].a = 1
console.log(shallowCopy)
console.log(newShallowCopy)

// Deep Copy: it stores the copiest of the object values and does not reflect changes made in the original object

const deepCopy = [{a:11},{b:2}]
const newDeepCopy = JSON.parse(JSON.stringify(deepCopy)); 
newDeepCopy[0].a = 1
console.log(deepCopy)
console.log(newDeepCopy)

// Output:
// Shallow Copy
[ { a: 1 }, { b: 2 } ]
[ { a: 1 }, { b: 2 } ]

// Deep Copy
[ { a: 11 }, { b: 2 } ]
[ { a: 1 }, { b: 2 } ]
