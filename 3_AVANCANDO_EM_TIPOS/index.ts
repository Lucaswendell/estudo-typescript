// 1 - arrays
let numbers: number[] = [1,2,3,4];

numbers.push(5);

console.log(numbers[2])

const nomes: string[] = ["Lucas", "Wendel"];

// 2 - outra sintaxe array
const nums: Array<number> = [100, 200];

nums.push(300);

console.log(nums);

// 3 - any 
const arr1: any = [1,2,"etste", [], {}];
console.log(arr1);
arr1.push([1,23])
console.log(arr1);

// 4 - paramentros tipados 
function soma(a:number, b:number){
    console.log(a + b)
}

soma(3,4);

// 5 - retorno de função
function greeting(name: string): string{
    return `Olá ${name}`;
}

console.log(greeting("Mateus"));

//6 - função anonimas
setTimeout(() => {
    const sallary: number = 1000;
    // console.log(parseFloat(sallary))
    // console.log(sallary)
}, 2);

// 7 - tipos de objeto
function passCoordinates(coord: {x: number, y: number}){
    console.log('X coordinates ' + coord.x);
    console.log('Y coordinates ' + coord.y);
}

passCoordinates({x: 2, y: 3});

const pessoaObj: { nome: string, surname: string } = { nome: "Lucas", surname: "Wendel" };

// 8 - props opcionais
function showNumbers(a: number, b:number, c?: number){
    console.log('A' + a);
    console.log('B' + b);
    console.log('C' + c);
}

showNumbers(1,2,3);
showNumbers(1,2);

//9 - Validando argumentos opcionais
function advancedGreeting(firstName: string, lastName?: string){
    const message = lastName ? `Olá, ${firstName} ${lastName}, tudo bem?` : `Olá, ${firstName}, tudo bem?`;
    
    return message;
}

console.log(advancedGreeting("Lucas", "Wendel"));
console.log(advancedGreeting("Lucas"));