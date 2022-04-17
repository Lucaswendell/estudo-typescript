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

// const pedro = new NewUser("Pedro", 12)