"use strict";
exports.__esModule = true;
//1 - importando arquivo
var greet_1 = require("./greet");
(0, greet_1["default"])();
//2 - importando variavel
var variable_1 = require("./variable");
console.log(variable_1.x);
//3 - multiplas importações
var multiple_1 = require("./multiple");
console.log(multiple_1.a);
console.log(multiple_1.b);
(0, multiple_1.myFunction)();
