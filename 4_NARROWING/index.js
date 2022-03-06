"use strict";
// 1 -type guard
function sum(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === 'number' && typeof b === 'number') {
        console.log(a + b);
    }
    else {
        console.log(`Imporsivel somar ${a} + ${b}`);
    }
}
sum("200", "300");
sum(100, 10.4);
sum("20", 2);
// 2 - checando se o valor existe
function operation(arr, operation) {
    if (operation) {
        switch (operation) {
            case 'sum':
                console.log(arr.reduce((valor, total) => valor + total));
                break;
            case "multiply":
                console.log(arr.reduce((valor, total) => valor * total));
                break;
        }
    }
    else {
        console.log("Por favor, defina uma operacao");
    }
}
operation([1, 2, 3], "");
operation([1, 2, 5], "sum");
operation([1, 2, 2, 4, 5], "multiply");
//3 - instanceof
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const jhon = new User('Jhon');
const paul = new SuperUser('paul');
console.log(jhon);
console.log(paul);
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log(`Olá ${user.name}, dejesa ver o sistema?`);
    }
    else if (user instanceof User) {
        console.log(`Diz ${user.name}`);
    }
}
console.log(userGreeting(jhon));
console.log(userGreeting(paul));
