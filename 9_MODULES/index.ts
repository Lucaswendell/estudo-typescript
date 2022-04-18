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

//5 - importando tudo
import * as myNumbers from './numbers';
console.log(myNumbers);

const x1 = myNumbers.n1;
console.log(x1)

myNumbers.showNumber();

//6 - importando types
import { Human } from "./myType";
class User implements Human{
  name;
  age;

  constructor(name: string,age:number){
    this.name = name;
    this.age = age;
  }
}

const joaquim = new User("Joaquim", 22);
console.log(joaquim);