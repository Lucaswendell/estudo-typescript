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
