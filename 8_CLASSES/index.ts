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
