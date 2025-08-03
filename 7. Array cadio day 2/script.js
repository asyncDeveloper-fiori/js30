const people = [
  { firstName: "John", lastName: "Doe", age: 28 },
  { firstName: "Jane", lastName: "Smith", age: 32 },
  { firstName: "Michael", lastName: "Johnson", age: 45 },
  { firstName: "Emily", lastName: "Williams", age: 24 },
  { firstName: "David", lastName: "Brown", age: 37 },
  { firstName: "Emma", lastName: "Williams", age: 7 },
  { firstName: "Roger", lastName: "Federer", age: 10 },
];

// Array.prototype.some returns true of one data meets the condition

const isAdult = people.some(person =>{
    const currentYear = (new Date()).getFullYear();

    return currentYear - person.age >= 18;
})

console.log(isAdult);

// Array.prototype.every
// returns true if all data meets the condition
const isNotAdult = people.every(person => {
    return (new Date()).getFullYear() - person.age <18;
})

console.log(isNotAdult);

//Array.prototype.find
const foundData = people.find(person => person.firstName==='Roger');
console.log(foundData);

// Array.prototype.findIndex
const idx = people.findIndex(person => person.firstName === 'Roger');
console.log(idx);

// slice method
const newArray = [
    ...people.slice(0,idx),
    ...people.slice(idx+1)
];

console.table(newArray);