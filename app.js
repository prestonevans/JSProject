// let start = '{"favColor":"orange","favSeason":"Fall"}';

// let myObject = JSON.parse(start);

// console.log(myObject);

// let myString = JSON.stringify(myObject);

// myObject = JSON.parse(myString);

// console.log(myObject);

// let theData1 = `{"first":"Paul","last":"Cheney","city":"Salem"}`;

// let myObject = JSON.parse(theData1);

// console.log(myObject);

// document.querySelector('p').innerHTML = myObject.first;

// let theData2 = '{"Jane": {"age":"29","degree": {"AAS":"VMI","BA":"UVA"}},"Jim": {"age":"49","degree":"MA"}}';
// let myObject = JSON.parse(theData2);

// console.log(myObject);

// myObject.Jane.age;

// document.querySelector('p').innerHTML = myObject.Jane.degree.AAS;

let xhr = new XMLHttpRequest();

xhr.open('Get', 'data.json', true);
xhr.responseType = 'text';
xhr.send();

xhr.onreadystatechange = function() {
	console.log(xhr.readyState);
	console.log(xhr.statusText);
};

xhr.onload = function() {
	if (xhr.status === 200) {
		let myStuff = JSON.parse(xhr.responseText);
		document.querySelector('p').innerHTML = myStuff.first;
	}
};
