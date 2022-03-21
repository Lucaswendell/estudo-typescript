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
