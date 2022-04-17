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