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

//3