"use strict";
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
// 7 - readonly array 
let myArray = ["Maçã", "Laranja", "Banada"];
myArray.forEach(item => {
    console.log("Fruta: " + item);
});
myArray = myArray.map(item => `Fruta: ${item}`);
console.log(myArray);
const myNumberArray = [1, 3, 4, 5, 6];
// const myNumberArray2: fiveNumbers = [1,3,4,5,6,5];
console.log(myNumberArray);
const anotherUser = ["Lucas", 20];
console.log(anotherUser[0]);
anotherUser[0] = "Wendel";
console.log(anotherUser[0]);
//9 - tuplas com readolny
function showNumbers(numbers) {
    // numbers[0] = 10
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 3]);
