//1 - importando arquivo
import importingGreet from "./greet";

importingGreet();

//2 - importando variavel
import { x } from "./variable";
console.log(x);

//3 - multiplas importações
import {a,b,myFunction} from './multiple';
console.log(a);
console.log(b);
myFunction();

//4 - alias
import { someName as name } from "./changename";
console.log(name);