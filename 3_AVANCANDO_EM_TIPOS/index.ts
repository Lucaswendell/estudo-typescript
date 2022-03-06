// 1 - arrays
let numbers: number[] = [1,2,3,4];

numbers.push(5);

console.log(numbers[2])

const nomes: string[] = ["Lucas", "Wendel"];

// 2 - outra sintaxe array
const nums: Array<number> = [100, 200];

nums.push(300);

console.log(nums);

// 3 - any 
const arr1: any = [1,2,"etste", [], {}];
console.log(arr1);
arr1.push([1,23])
console.log(arr1);

// 4 - paramentros tipados 
function soma(a:number, b:number){
    console.log(a + b)
}

soma(3,4);

// 5 - retorno de função
function greeting(name: string): string{
    return `Olá ${name}`;
}

console.log(greeting("Mateus"));

//6 - função anonimas
setTimeout(() => {
    const sallary: number = 1000;
    // console.log(parseFloat(sallary))
    // console.log(sallary)
}, 2);

// 7 - tipos de objeto
function passCoordinates(coord: {x: number, y: number}){
    console.log('X coordinates ' + coord.x);
    console.log('Y coordinates ' + coord.y);
}

passCoordinates({x: 2, y: 3});

const pessoaObj: { nome: string, surname: string } = { nome: "Lucas", surname: "Wendel" };

// 8 - props opcionais
function showNumbers(a: number, b:number, c?: number){
    console.log('A' + a);
    console.log('B' + b);
    console.log('C' + c);
}

showNumbers(1,2,3);
showNumbers(1,2);

//9 - Validando argumentos opcionais
function advancedGreeting(firstName: string, lastName?: string){
    const message = lastName ? `Olá, ${firstName} ${lastName}, tudo bem?` : `Olá, ${firstName}, tudo bem?`;
    
    return message;
}

console.log(advancedGreeting("Lucas", "Wendel"));
console.log(advancedGreeting("Lucas"));

// 10 - union type
function showBalance(balance: string | number){
    console.log(`o saldo da conta é R$${balance}`);
}

showBalance(500);
showBalance("100");

const arr2: Array<number | string | boolean> = [1,23,"aws", false];

//11 - Avançando em union types
function showUserRole(role: boolean | string){
    if(typeof role === "boolean"){
        return "Usuario não aprovado";
    }

    return "A função do usuario é: " + role;
}

console.log(showUserRole(false));
console.log(showUserRole("Admin"));

// 12 - type alias
type ID = string | number;

function showId(id: ID){
    console.log(`O id é: ${id}`);
} 
showId(1);
showId(200);
showId('200');
showId('aa');

// 13 - interface
interface Point {
    x: number,
    y: number,
    z: number
}

function showCoordenates(obj: Point){
    console.log(obj);
}

const coordObj: Point = {
    x: 100,
    z: 200,
    y: 300
}

showCoordenates(coordObj);

//14 - Interface vs type alias
interface Person {
    name: string
}

interface Person {
    age: number
}


const personInterface: Person = {
    name: 'Eu',
    age: 100
}

console.log(personInterface);

type personType = {
    name: string
}

// type personType = {

// }

//15 - literal type

function showDirection(direction: "left" | "right" | "center") {
    console.log(direction);
}

showDirection("center");
showDirection("right");

//16 - non null
const p = document.querySelector("#some-p")
console.log(p!.innerHTML)

//17 - bigint
let n: bigint;

n = 100n
console.log(n)

//18 - symbol
let symbolA = Symbol("a");
let symbolB = Symbol("b");

console.log(symbolA);
console.log(symbolB);
console.log(symbolA === symbolB);