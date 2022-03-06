"use strict";
// 1 - arrays
let numbers = [1, 2, 3, 4];
numbers.push(5);
console.log(numbers[2]);
const nomes = ["Lucas", "Wendel"];
// 2 - outra sintaxe array
const nums = [100, 200];
nums.push(300);
console.log(nums);
// 3 - any 
const arr1 = [1, 2, "etste", [], {}];
console.log(arr1);
arr1.push([1, 23]);
console.log(arr1);
// 4 - paramentros tipados 
function soma(a, b) {
    console.log(a + b);
}
soma(3, 4);
// 5 - retorno de função
function greeting(name) {
    return `Olá ${name}`;
}
console.log(greeting("Mateus"));
//6 - função anonimas
setTimeout(() => {
    const sallary = 1000;
    // console.log(parseFloat(sallary))
    // console.log(sallary)
}, 2);
// 7 - tipos de objeto
function passCoordinates(coord) {
    console.log('X coordinates ' + coord.x);
    console.log('Y coordinates ' + coord.y);
}
passCoordinates({ x: 2, y: 3 });
const pessoaObj = { nome: "Lucas", surname: "Wendel" };
// 8 - props opcionais
function showNumbers(a, b, c) {
    console.log('A' + a);
    console.log('B' + b);
    console.log('C' + c);
}
showNumbers(1, 2, 3);
showNumbers(1, 2);
//9 - Validando argumentos opcionais
function advancedGreeting(firstName, lastName) {
    const message = lastName ? `Olá, ${firstName} ${lastName}, tudo bem?` : `Olá, ${firstName}, tudo bem?`;
    return message;
}
console.log(advancedGreeting("Lucas", "Wendel"));
console.log(advancedGreeting("Lucas"));
// 10 - union type
function showBalance(balance) {
    console.log(`o saldo da conta é R$${balance}`);
}
showBalance(500);
showBalance("100");
const arr2 = [1, 23, "aws", false];
//11 - Avançando em union types
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuario não aprovado";
    }
    return "A função do usuario é: " + role;
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
function showId(id) {
    console.log(`O id é: ${id}`);
}
showId(1);
showId(200);
showId('200');
showId('aa');
