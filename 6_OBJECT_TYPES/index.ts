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

