"use strict";
//1 - void
function withoutReturn() {
    console.log('Esta função não tem retorno');
}
withoutReturn();
//2 - callback como argumento
function greeting(name) {
    return `Olá, ${name}`;
}
function preGreeting(f, userName) {
    console.log("Preparando a função");
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "Lucas");
preGreeting(greeting, "Jose");
//3 - generic function
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement(['a', 'b', 'c']));
console.log(firstElement([1, 2, 3, 4]));
// console.log(firstElement(''));
function mergeObjects(obj1, obj2) {
    return {
        ...obj1,
        ...obj2
    };
}
const newObject = mergeObjects({ name: "Lucas" }, { age: 20, job: "Programmer" });
console.log(newObject);
//4 - Contraints
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(4, 3));
console.log(biggestNumber("2", "1"));
//console.log(biggestNumber("5",1));
//5 - especificar tipo de argumento
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 4, 5], [1, 2, 3]));
console.log(mergeArrays(["a", "b", "s"], [1, 2, 3]));
