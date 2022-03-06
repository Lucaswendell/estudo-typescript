// 1 -type guard
function sum(a: number | string, b: number | string){
    if(typeof a === 'string' && typeof b === 'string'){
        console.log(parseFloat(a) + parseFloat(b));
    }else if(typeof a === 'number' && typeof b === 'number'){
        console.log(a + b)
    } else {
        console.log(`Imporsivel somar ${a} + ${b}`);
    }
}

sum("200", "300");
sum(100, 10.4);
sum("20", 2)

// 2 - checando se o valor existe
function operation(arr: number[], operation: string | undefined){
    if(operation){
        switch(operation){
            case 'sum':
                console.log(arr.reduce((valor, total) => valor + total))
                break;
            case "multiply":
                console.log(arr.reduce((valor, total) => valor * total))
                break;

        }
    }else{
        console.log("Por favor, defina uma operacao");
    }
}

operation([1,2,3], "");
operation([1,2,5], "sum");
operation([1,2,2,4,5], "multiply");

//3 - instanceof
class User {
    name;
    constructor(name: string){
        this.name = name;
    }
}

class SuperUser extends User{
    constructor(name: string){
        super(name);
    }
}

const jhon = new User('Jhon');
const paul = new SuperUser('paul');

console.log(jhon)
console.log(paul)

function userGreeting(user: object){
    if(user instanceof SuperUser){
        console.log(`Olá ${user.name}, dejesa ver o sistema?`);
    }else if(user instanceof User){
        console.log(`Diz ${user.name}`);
    }
}

userGreeting(jhon);
userGreeting(paul);

// 4 operador in
class Dog{
    name;
    breed;

    constructor(name: string, breed?: string){
        this.name = name;

        if(breed){
            this.breed = breed;
        }
    }
}


const turca = new Dog("Turca");
const bob = new Dog("Bob", "Pastor");

function showDogDetails(dog: Dog){
    if('breed' in dog){
        console.log(`O cachorro é da raça ${dog.breed}`);
    }else{
        console.log(`O cachorro é da SRD`);
    }
}

showDogDetails(turca);
showDogDetails(bob);

