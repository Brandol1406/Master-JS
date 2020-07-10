// JS array equivalents to C# LINQ methods - by Dan B.
// Original source: https://gist.github.com/DanDiplo/30528387da41332ff22b
function out() {
  var args = Array.prototype.slice.call(arguments, 0);
  var formatted = args.map(a => {
    if (isObject(a)) {
		if(isObject(a[0])) {
			return renderizeTable(a, "id='myTable' border='1'");
		}
		return JSON.stringify(a);
    }
    return a;
  });
  document.getElementById('output').innerHTML += formatted + "<br/>";
}

function renderizeTable(collection, tableAttrs) {
	tableAttrs = tableAttrs || "";
	//Initializing table
	let htmlTable = "<table " + tableAttrs + ">";
	
	//Rendering THEAD
	htmlTable += "<thead>";
	htmlTable += "<tr>";
	let firtsObj = collection[0];
	for (h in firtsObj) {
		htmlTable += "<th>" + h + "</th>"
	}
	htmlTable += "</tr>";
	htmlTable += "</thead>";
	
	//Rendering TBODY
	htmlTable += "<tbody>";
	//Looping through elements in collection
	collection.forEach(function (elem) {
		htmlTable += "<tr>";
		//Obtaining values of current element
		var vals = Object.values(elem);
		vals.forEach(function (val) {
			htmlTable += "<td>" + val + "</td>";
		});
		htmlTable += "</tr>";
	});
	htmlTable += "</tbody>";
	
	//Finalizing Table
	htmlTable += "</table>";
	return htmlTable;
}
 
function isObject(obj) {
  return obj === Object(obj);
}
// Here's a simple array of "person" objects
var people = [{
  id: 1,
  name: "John",
  age: 20,
  sex: "M"
}, {
  id: 2,
  name: "Mary",
  age: 35,
  sex: "F"
}, {
  id: 3,
  name: "Arthur",
  age: 78,
  sex: "M"
}, {
  id: 4,
  name: "Mike",
  age: 27,
  sex: "M"
}, {
  id: 5,
  name: "Judy",
  age: 42,
  sex: "F"
}, {
  id: 6,
  name: "Tim",
  age: 8,
  sex: "M"
}];
 
// filter is equivalent to Where
 
var youngsters = people.filter(function(item) {
  return item.age < 30;
});
 
// ES6 syntax
let youngsters2 = people.filter(p => p.age < 30);
 
out("People younger than 30");
out(youngsters);
out(youngsters2);
out();
 
 
// map is equivalent to Select
var names = people.map(function(item) {
  return item.name;
});
// ES6 syntax
let names2 = people.map(i => i.name);
 
out("Just the names of people");
out(names);
out(names2);
out();
 
 
// every is equivalent to All
var allUnder40 = people.every(function(item) {
  return item.age < 40;
});
let allUnder402 = people.every(i => i < 40);
 
out("Are all people under 40?"); // false
out(allUnder40);
out(allUnder402);
out();
 
// some is equivalent to Any
 
var anyUnder30 = people.some(function(item) {
  return item.age < 30;
});
let anyUnder302 = people.some(p => p.age < 30);
 
out("Are any people under 30?");
out(anyUnder30); // true
out(anyUnder302); // true
out();
 
// reduce is "kinda" equivalent to Aggregate (and also can be used to Sum)
 
var aggregate = people.reduce(function(item1, item2) {
  return {
    name: '',
    age: item1.age + item2.age
  };
});
// note () around object: https://stackoverflow.com/a/28770578/13729
let aggregate2 = people.reduce((a, b) => ({
  name: '',
  age: a.age + b.age
}));
 
out("Aggregate age");
out(aggregate.age); // { age: 210 }
out(aggregate2.age);
out();
 
// sort is "kinda" like OrderBy (but it sorts the array in place - eek!)
 
var orderedByName = people.sort(function(a, b) {
  return a.name > b.name ? 1 : 0;
});
let orderedByName2 = people.sort((a, b) => a.name > b.name ? 1 : 0);
 
out("Ordered by name");
out(orderedByName);
out(orderedByName2);
out();
 
// and, of course, you can chain function calls 
 
var namesOfPeopleOver30OrderedDesc = people.filter(function(person) {
  return person.age > 30;
}).
map(function(person) {
  return person.name;
}).
sort(function(a, b) {
  return a < b ? 1 : 0;
});
 
let namesOfPeopleOver30Desc = people
  .filter(p => p.age > 30)
  .map(p => p.name)
  .sort((a, b) => a < b ? 1 : 0);
 
out("And now.. the names of all people over 30 ordered by name descending");
out(namesOfPeopleOver30OrderedDesc);
out(namesOfPeopleOver30Desc);
out();