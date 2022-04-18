//1 - campos em classe
class User{
    name!: string;
    age!: number;
}

const lucas = new User();

console.log(lucas);

lucas.name = "Lucas";
lucas.age = 10;

console.log(lucas);

//2 - constructor
class NewUser {
    name;
    age;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

const joao = new NewUser("João", 22);
console.log(joao);

// const pedro = new NewUser("Pedro", 12);

//3 - campo readonly
class Car {
    name;
    readonly wheels = 4;

    constructor(name: string){
        this.name = name;
    }
}

const fusca = new Car("Fusca");
// fusca.wheels = 5;
console.log(fusca)
fusca.name = "Fusca Turbo";

//4 - herança e super

class Machine {
    name;
    constructor(name: string){
        this.name = name;
    }
}

const trator = new Machine("Trator");

class KillerMachine extends Machine{
    guns;
    constructor(name: string, guns: number){
        super(name);
        this.guns = guns;
    }
}

const destroyer = new KillerMachine("Destroyer", 4);
console.log(trator);
console.log(destroyer)

//5 - metodos

class Dwarf{
    name;
    constructor(name: string){
        this.name = name;
    }

    greeting(){
        console.log("Hey stranger!");
    }
}

const jimmy = new Dwarf("Jimmy");
console.log(jimmy.name);

jimmy.greeting();

console.log(jimmy);


//6 - this
class Truck {
    model;
    hp;
    constructor(model: string, hp: number){
        this.model = model;
        this.hp = hp;
    }

    showDetails(){
        console.log(`Caminhão modelo: ${this.model}, que tem ${this.hp} cavalos de potencia`);
    }
}

const volvo = new Truck("Volvo", 400);
volvo.showDetails();

const scania = new Truck("Scania", 500);
scania.showDetails();

//7 - getters
class Person {
    name;
    surname;
    constructor(name: string, surname: string){
        this.name = name;
        this.surname = name;
    }

    get fullName(){
        return `${this.name} ${this.surname}`;
    }
}

const lucasWendel = new Person("Lucas", "Costa");

console.log(lucasWendel.name);
console.log(lucasWendel.fullName);

//8 - setter
class Coords {
    x!: number;
    y!: number;

    set fillX(x: number){
        if(x === 0){
            return;
        }

        this.x = x;
        console.log("X inserido com sucesso");
    }
    
    set fillY(y: number){
        if(y === 0){
            return;
        }

        this.y = y;
        console.log("Y inserido com sucesso");
    }

    get getCoords(){
        return `X: ${this.x} e Y: ${this.y}`; 
    }
}

const coord = new Coords();
coord.fillX = 5;
coord.fillY = 0;
coord.fillY = 15;

console.log(coord);
console.log(coord.getCoords);

//9 - Classe com Interface

interface showTitle {
    itemTitle(): string;
}

class BlogPost implements showTitle{
    title;
    constructor(title: string){
        this.title = title;
    }

    itemTitle(): string {
        return `O titulo do item é: ${this.title}`
    }
}

class TestingInterface implements showTitle{
    title;
    constructor(title: string){
        this.title = title;
    }

    itemTitle(): string {
        return `O titulo é: ${this.title}`
    }
}

const post = new BlogPost("Hello world");

console.log(post.itemTitle());

const testing = new TestingInterface("Testing");

console.log(testing.itemTitle());

//10 - override de metodos
class Base {
    showMethod(){
        console.log("Alguma coisa");
    }
}

class Nova extends Base{
    showMethod() {
        console.log("Outra coisa")
    }
}

new Nova().showMethod()

//11 - public 
class C {
    public x = 10;
}

class D extends C{ }

const cInstance = new C();
console.log(cInstance.x);
const dInstance = new D();
console.log(dInstance.x);

//12 - protected

class E {
    protected x = 10;

    protected protectedMethod(){
        console.log("Metodo protected");
    }
    
}

class F extends E{
    showX(){
        console.log(`X: ${this.x}`);
    }

    showProtectedMethod(){
        this.protectedMethod();
    }
}
const fInstance = new F();
fInstance.showX()
fInstance.showProtectedMethod();

//13 - private
class PrivateClass {
    private name = "Private";

    showName(){
        return this.name;
    }

    private privateMethod() {
        console.log("Private method");
    }

    showPrivateMethod(){
        this.privateMethod();
    }
}
const pObj = new PrivateClass();
//console.log(pObj.name);
console.log(pObj.showName());
pObj.showPrivateMethod();

//14 - static members
class StaticMember {
   static prop = "Testing static";

   static staticMethods(){
       console.log("Este é um metodo estatico");
   }
}

console.log(StaticMember.prop)
StaticMember.staticMethods();

//15 - generics class
class Item<T, U>{
    first;
    second;

    constructor(first: T, second: U){
        this.first = first;
        this.second = second;
    }

    get showFirst(){
        return `O first é: ${this.first}`;
    }
}

const newItem = new Item("Primeiro", "Segundo");
console.log(newItem)
console.log(newItem.showFirst)
console.log(typeof newItem.first);

const secondItem = new Item(12, true);
console.log(secondItem.showFirst)
console.log(typeof secondItem.first);