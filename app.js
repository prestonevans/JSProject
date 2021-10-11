let start = '{"favColor":"orange","favSeason":"Fall"}';

let myObject = JSON.parse(start);

console.log(myObject);

let myString = JSON.stringify(myObject);

myObject = JSON.parse(myString);

console.log(myObject);
