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
//4 - herança e super
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine("Trator");
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const destroyer = new KillerMachine("Destroyer", 4);
console.log(trator);
console.log(destroyer);
//5 - metodos
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log("Hey stranger!");
    }
}
const jimmy = new Dwarf("Jimmy");
console.log(jimmy.name);
jimmy.greeting();
console.log(jimmy);
//6 - this
class Truck {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`Caminhão modelo: ${this.model}, que tem ${this.hp} cavalos de potencia`);
    }
}
const volvo = new Truck("Volvo", 400);
volvo.showDetails();
const scania = new Truck("Scania", 500);
scania.showDetails();
//7 - getters
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = name;
    }
    get fullName() {
        return `${this.name} ${this.surname}`;
    }
}
const lucasWendel = new Person("Lucas", "Costa");
console.log(lucasWendel.name);
console.log(lucasWendel.fullName);
//8 - setter
class Coords {
    set fillX(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log("X inserido com sucesso");
    }
    set fillY(y) {
        if (y === 0) {
            return;
        }
        this.y = y;
        console.log("Y inserido com sucesso");
    }
    get getCoords() {
        return `X: ${this.x} e Y: ${this.y}`;
    }
}
const coord = new Coords();
coord.fillX = 5;
coord.fillY = 0;
coord.fillY = 15;
console.log(coord);
console.log(coord.getCoords);
class BlogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O titulo do item é: ${this.title}`;
    }
}
class TestingInterface {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O titulo é: ${this.title}`;
    }
}
const post = new BlogPost("Hello world");
console.log(post.itemTitle());
const testing = new TestingInterface("Testing");
console.log(testing.itemTitle());
//10 - override de metodos
class Base {
    showMethod() {
        console.log("Alguma coisa");
    }
}
class Nova extends Base {
    showMethod() {
        console.log("Outra coisa");
    }
}
new Nova().showMethod();
//11 - public
class C {
    constructor() {
        this.x = 10;
    }
}
class D extends C {
}
const cInstance = new C();
console.log(cInstance.x);
const dInstance = new D();
console.log(dInstance.x);
//12 - protected
class E {
    constructor() {
        this.x = 10;
    }
    protectedMethod() {
        console.log("Metodo protected");
    }
}
class F extends E {
    showX() {
        console.log(`X: ${this.x}`);
    }
    showProtectedMethod() {
        this.protectedMethod();
    }
}
const fInstance = new F();
fInstance.showX();
fInstance.showProtectedMethod();
//13 - private
class PrivateClass {
    constructor() {
        this.name = "Private";
    }
    showName() {
        return this.name;
    }
    privateMethod() {
        console.log("Private method");
    }
    showPrivateMethod() {
        this.privateMethod();
    }
}
const pObj = new PrivateClass();
//console.log(pObj.name);
console.log(pObj.showName());
pObj.showPrivateMethod();
//14 - static members
class StaticMember {
    static staticMethods() {
        console.log("Este é um metodo estatico");
    }
}
StaticMember.prop = "Testing static";
console.log(StaticMember.prop);
StaticMember.staticMethods();
//15 - generics class
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    get showFirst() {
        return `O first é: ${this.first}`;
    }
}
const newItem = new Item("Primeiro", "Segundo");
console.log(newItem);
console.log(newItem.showFirst);
console.log(typeof newItem.first);
const secondItem = new Item(12, true);
console.log(secondItem.showFirst);
console.log(typeof secondItem.first);
//16 - parameter properties
class ParameterPorperties {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.price = price;
        this.qty = qty;
    }
    get showQty() {
        return `A quantidade é ${this.qty}`;
    }
    get showPrice() {
        return `O total é ${this.price.toLocaleString()}`;
    }
}
const newShirt = new ParameterPorperties("Shirt", 10, 19.99);
console.log(newShirt.name);
console.log(newShirt.showQty);
console.log(newShirt.showPrice);
//17 - class expression
const myClass = class {
    constructor(name) {
        this.name = name;
    }
};
const person = new myClass("Lucas");
console.log(person);
console.log(person.name);
// 17 - abstract class
class AbstractClass {
}
class AbstractExample extends AbstractClass {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        console.log(this.name);
    }
}
new AbstractExample("Jeremias").showName();
// 18 - relação entre classes
class Dog {
}
class Cat {
}
const dog = new Cat();
