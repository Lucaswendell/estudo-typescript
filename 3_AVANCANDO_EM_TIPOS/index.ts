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