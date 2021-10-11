// let start = '{"favColor":"orange","favSeason":"Fall"}';

// let myObject = JSON.parse(start);

// console.log(myObject);

// let myString = JSON.stringify(myObject);

// myObject = JSON.parse(myString);

// console.log(myObject);

let theData1 = `{"first":"Paul","last":"Cheney","city":"Salem"}`;

let myObject = JSON.parse(theData1);

console.log(myObject);

document.querySelector('p').innerHTML = myObject.first;
