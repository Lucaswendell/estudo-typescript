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