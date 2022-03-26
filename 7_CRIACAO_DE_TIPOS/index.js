"use strict";
//1 - generics
function showData(arg) {
    return `O dado é: ${arg}`;
}
console.log(showData("teste"));
console.log(showData(1));
console.log(showData(true));
console.log(showData(["tete", "s"]));
//2 - Constraint em generics
function showProductName(obj) {
    console.log(`O nome do objeto é: ${obj.name}`);
}
const myObj = { name: "Porta", cor: "Branca" };
const otherObject = { name: "Carro", cor: "Roupa" };
const thirdObj = { price: 19.1, cor: "Roupa" };
showProductName(myObj);
showProductName(otherObject);
const myCar = { name: "Fusca", wheels: 4, engine: 1.0, color: "Branca" };
const myPen = { name: "Fusca", wheels: false, engine: false, color: "Azul" };
console.log(myCar);
console.log(myPen);
//4 - type parameters
function getSomeKey(obj, key) {
    return `A chave ${key} está presente no objeto e tem o valor de ${obj[key]}`;
}
const server = {
    hd: "2TB",
    ram: "32GB"
};
console.log(getSomeKey(server, "hd"));
console.log(getSomeKey(server, "ram"));
// console.log(getSomeKey(server, "teste"))
