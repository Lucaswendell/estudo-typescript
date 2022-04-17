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

//6 - herança e super

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

//7 - metodos

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