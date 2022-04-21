// 1 - exemplo decorator
function myDecorator() {
  console.log("Iniciando decorator");

  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("Executando decorator");
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
  };
}

class MyClass {

  @myDecorator()
  testing() {
    console.log("Terminando execução do metodo!");
  }
}

const myClass = new MyClass();

myClass.testing();

// 2 - multiplos decorators

function a(){
  return (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) => {
      console.log("Executou a.")
  }
}

function b(){
  return (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) => {
      console.log("Executou b.")
  }
}

//Executa o mais abaixo primeiro
class MultipleDecorators{

  @b()
  @a()
  testing(){
    console.log("Terminando execução");
  }
}

new MultipleDecorators().testing();

//3 - Class decorator
function classDec(constructor: Function){
  console.log(constructor)
  if(constructor.name === "User"){
    console.log("Criando usuario.");
  }
}
@classDec
class User {
  name;
  constructor(name: string){
    this.name = name;
  }
}

const lucas = new User("Lucas");

console.log(lucas)

//4 - method decorator
function enumerable(value: boolean) {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    descriptor.enumerable = value;
  }
}
class Machine{
  name;
  constructor(name: string){
    this.name = name;
  }

  @enumerable(false)
  showName(){
    console.log(this)
    console.log(`O nome da maquina é ${this.name}`);
  }
}

new Machine("Trator").showName();

//5 - Acessor decorator(Apenas set e get)
class Monster{
  name?;
  age?;
  constructor(name: string, age: Number){
    this.name = name;
    this.age = age;
  }

  @enumerable(false)
  get showName(){
    return this.name;
  }

  @enumerable(true)
  get showAge(){
    return this.age;
  }
}

console.log(new Monster("Charmander", 10))

//6 - property decorator
function formatNumber(){
  return function(target: Object, propertyKey: string){
    let value: string;

    const getter = function(){
      return value;
    }

    const setter = function(newValue: string){
      value = newValue.padStart(5,'0');
    }

    Object.defineProperty(target, propertyKey, {
      set: setter,
      get: getter
    })
  }
}
class ID {
  @formatNumber()
  id;
  constructor(id: string){
    this.id = id;
  }
}

const id = new ID("1");
console.log(id)
