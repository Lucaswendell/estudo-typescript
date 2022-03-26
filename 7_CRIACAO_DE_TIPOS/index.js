"use strict";
//1 - generics
function showData(arg) {
    return `O dado é: ${arg}`;
}
console.log(showData("teste"));
console.log(showData(1));
console.log(showData(true));
console.log(showData(["tete", "s"]));
