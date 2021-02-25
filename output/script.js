"use strict";
var a = []; //different type er data thakle array te
a.push(10);
a.push(10);
a.push(10);
a.push(10);
a.push("10");
//console.log(a)
//object er khetre
//jodi declare er somoy bole dei kmn hobe tahole temon e korte HTMLObjectElement.noyto mon moto kora jabe
// let b: object;
// b={
//     name:'shakib',
//     age: 20
// }
var b;
b = {
    name: "Nick",
    age: 20,
    adult: true,
};
// console.log(b);
//Function 
var func = function (name, age, cls) {
    if (cls === void 0) { cls = '10'; }
    console.log("My name is " + name + " and i am " + age + " years old and i'm in class " + cls);
};
func('Shakib', 25, '15');
var id;
id = 12;
console.log(id);
//function signature use kore amra ekta namer function jekono jaygay e banaile ki structure follow korbe tar schema banay rakhte pari.
