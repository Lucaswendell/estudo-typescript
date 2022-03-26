"use strict";
// 1 - tipo de objeto para função com interface
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} e o seu preço é R$${product.price.toLocaleString()}`);
    console.log(`O produto ${product.isAvailable ? "esta" : "não esta"} disponivel`);
}
const shirt = {
    name: "Camisa",
    price: 19.99,
    isAvailable: true
};
showProductDetails(shirt);
function showUserDetails(user) {
    console.log(`O usuário tem o e-mail: ${user.email}`);
    if (user.role) {
        console.log(`À função do usuário é: ${user.role}`);
    }
}
const u1 = {
    email: "eu@eu.com"
};
const u2 = {
    email: "admin@admin.com",
    role: "nothing"
};
showUserDetails(u1);
showUserDetails(u2);
const fusca = {
    brand: "VW",
    wheels: 4
};
console.log(fusca);
const coord = {
    x: 1
};
coord.y = 10;
coord[1] = 10;
console.log(coord);
const lucas = {
    name: "Lucas",
    age: 20
};
const goku = {
    name: "Goku",
    age: 132,
    superpower: ['Kamehameha', 'Genki Dama']
};
console.log(lucas);
console.log(goku);
const human = {
    name: "Arnold",
    type: "shotgun",
    caliber: 12
};
console.log(human);
console.log(human.caliber);
