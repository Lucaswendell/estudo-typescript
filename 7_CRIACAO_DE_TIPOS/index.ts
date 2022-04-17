//1 - generics
function showData<T>(arg: T): string{
    return `O dado é: ${arg}`;
}

console.log(showData("teste"))
console.log(showData(1))
console.log(showData(true))
console.log(showData(["tete", "s"]));

//2 - Constraint em generics

function showProductName<T extends {name: string}>(obj: T){
    console.log(`O nome do objeto é: ${obj.name}`);
}

const myObj = {name: "Porta", cor: "Branca"};
const otherObject = {name: "Carro", cor: "Roupa"};
const thirdObj = {price: 19.1, cor: "Roupa"};

showProductName(myObj);
showProductName(otherObject);
// showProductName(thirdObj);

//3 - generics com interfaces
interface MyObject<T,U,Q> {
    name: string,
    wheels: T,
    engine: U,
    color: Q
}

type Car = MyObject<number, number, string>;
type Pen = MyObject<boolean, boolean, string>;

const myCar: Car = {name: "Fusca", wheels: 4, engine: 1.0, color: "Branca"};
const myPen: Pen = {name: "Fusca", wheels: false, engine: false, color: "Azul"};

console.log(myCar);
console.log(myPen);

//4 - type parameters
function getSomeKey<T, K extends keyof T>(obj: T, key: K){
    return `A chave ${key} está presente no objeto e tem o valor de ${obj[key]}`;
}

const server = {
    hd: "2TB",
    ram: "32GB"
}

console.log(getSomeKey(server, "hd"))
console.log(getSomeKey(server, "ram"))
// console.log(getSomeKey(server, "teste"))

//5 - keyof operator
type Character = {name: string, age: number, hasDriveLicense: boolean};

type C = keyof Character;

function showCharacter(obj: Character, name: C){
    return obj[name];
}

const myCharacter: Character = {
    name: "Lucas",
    age: 20,
    hasDriveLicense: false
}

console.log(showCharacter(myCharacter, "age"))
console.log(showCharacter(myCharacter, "hasDriveLicense"))
console.log(showCharacter(myCharacter, "name"))

//6 - typeof type operator
const userName: string = "Lucas";

const userName2: typeof userName = "Wendel";

type x = typeof userName;

const userName4: x = "Joaquim";

//7 - Indexed access type
type Truck = {km: number, kg: number, description: string}

type km = Truck['km']; //pega uma chave especifica

const newTrunk: Truck = {
    km: 1000,
    kg: 5000,
    description: "Pouca carga"
}

function showKm(km: km){
    console.log(`O veilo tem a km de: ${km}`);
}

showKm(newTrunk.kg);

//8 - Conditional types
interface A { }

interface B extends A{}

type myType = B extends A ? number : string;

const somarVar: myType = 5;
// const somarVar2: myType = "teste";

interface Teste {
    showName(): string
}

type myTypeB = Teste extends {showName(): string} ? string : boolean;