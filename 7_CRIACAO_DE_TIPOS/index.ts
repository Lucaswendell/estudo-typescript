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