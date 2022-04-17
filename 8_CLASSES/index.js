"use strict";
//1 - campos em classe
class User {
}
const lucas = new User();
console.log(lucas);
lucas.name = "Lucas";
lucas.age = 10;
console.log(lucas);
//2 - constructor
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const joao = new NewUser("João", 22);
console.log(joao);
// const pedro = new NewUser("Pedro", 12);
//3 - campo readonly
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const fusca = new Car("Fusca");
// fusca.wheels = 5;
console.log(fusca);
fusca.name = "Fusca Turbo";
