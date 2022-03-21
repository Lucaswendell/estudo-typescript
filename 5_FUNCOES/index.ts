//1 - void
function withoutReturn(): void{
    console.log('Esta função não tem retorno');
}

withoutReturn();

//2 - callback como argumento
function greeting(name: string): string{
    return `Olá, ${name}`;
}

function preGreeting(f: (name: string) => string, userName: string){
    console.log("Preparando a função");

    const greet = f(userName);

    console.log(greet);
}

preGreeting(greeting, "Lucas");
preGreeting(greeting, "Jose");

//3 - generic function
function firstElement<T>(arr: T[]): T{
    return arr[0];
}

console.log(firstElement(['a','b','c']));
console.log(firstElement([1,2,3,4]));
// console.log(firstElement(''));

function mergeObjects<U, T>(obj1: U, obj2: T){
    return {
        ...obj1,
        ...obj2
    }

}

const newObject = mergeObjects({name: "Lucas"}, {age: 20, job: "Programmer"})
console.log(newObject);

//4 - Contraints
function biggestNumber<T extends number | string>(a: T, b: T): T{
    let biggest: T;
    if(+a > +b){
        biggest = a;
    }else{
        biggest = b;
    }

    return biggest;
}

console.log(biggestNumber(4,3));
console.log(biggestNumber("2","1"));
//console.log(biggestNumber("5",1));

//5 - especificar tipo de argumento
function mergeArrays<T>(arr1: T[], arr2: T[]){
    return arr1.concat(arr2);
}

console.log(mergeArrays([1,4,5], [1,2,3]))
console.log(mergeArrays<number | string>(["a","b","s"], [1,2,3]))

//6 - paramentros opcionais

function mordernGreeting(name: string, greet?: string){
    if(greet){
        return `Olá ${greet} ${name}, tudo bem?`
    }
    return `Olá ${name}, tudo bem?`
}

console.log(mordernGreeting("Lucas"));
console.log(mordernGreeting("Lucas", "Mr."));

//6 - parametros default
function somaDefault(n: number, m = 10){
    return n + m;
}

console.log(somaDefault(10))
console.log(somaDefault(10,30))

// 7 - unknown
function doSomething(x: unknown){
    if(Array.isArray(x)){
        console.log(x[0])
    }else if(typeof x === 'number'){
        console.log('X é um numero')
    }
}


doSomething('x')