const people = [
  { firstName: "John", lastName: "Doe", age: 28 },
  { firstName: "Jane", lastName: "Smith", age: 32 },
  { firstName: "Michael", lastName: "Johnson", age: 45 },
  { firstName: "Emily", lastName: "Williams", age: 24 },
  { firstName: "David", lastName: "Brown", age: 37 }
];

// Array.prototype.filter
// filters data based on some specific condition
const old = people.filter((p)=>{
   if(p.age > 30) return true;
});

console.table(old);

// Array.prototype.map
// modify and return new array
const modified = people.map(p=> p.firstName + p.lastName);

console.table(modified);

// Array.prototype.sort
// here we sort based on first name ascii value
const sorted = people.sort((a,b)=>{
    if(a.firstName > b.firstName){
        return 1;
    }
    else{
        return -1;
    }
});

console.table(sorted);

// Array.prototype.reduce
const total = people.reduce((total,p)=>{
    return total + (p.age);
},0);

console.log(total);


// trying to fetch data from a web page and manipulate it
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
const category = document.querySelectorAll('.mw-category-group a');

var data = Array.from(category);

const final = data.filter((d)=>{
    if(d.innerText.includes('de')){
        return true;
    }
});

final.forEach((f)=>{
    console.log(f.innerText);
});
