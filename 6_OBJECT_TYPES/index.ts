// 1 - tipo de objeto para função com interface

interface Product {
    name: string,
    price: number,
    isAvailable: boolean
}

function showProductDetails(product: Product){
    console.log(`O nome do produto é ${product.name} e o seu preço é R$${product.price.toLocaleString()}`);
    console.log(`O produto ${product.isAvailable ? "esta" : "não esta"} disponivel`)
}

const shirt: Product = {
    name: "Camisa",
    price: 19.99,
    isAvailable: true
}

showProductDetails(shirt);

//2 - propriedades opcionais em interfaces
interface User {
    email: string,
    role?: string
}


function showUserDetails(user: User){
    console.log(`O usuário tem o e-mail: ${user.email}`);
    if(user.role){
        console.log(`À função do usuário é: ${user.role}`);
    }
}

const u1: User = {
    email: "eu@eu.com"
}

const u2: User = {
    email: "admin@admin.com",
    role: "nothing"
}

showUserDetails(u1);
showUserDetails(u2);

//3 - readonly
interface Car {
    brand: string,
    readonly wheels: number
}

const fusca: Car = {
    brand: "VW",
    wheels: 4
}

console.log(fusca);
// fusca.wheels = 5