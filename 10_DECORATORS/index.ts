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