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