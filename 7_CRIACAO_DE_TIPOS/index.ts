//1 - generics
function showData<T>(arg: T): string{
    return `O dado é: ${arg}`;
}

console.log(showData("teste"))
console.log(showData(1))
console.log(showData(true))
console.log(showData(["tete", "s"]));

