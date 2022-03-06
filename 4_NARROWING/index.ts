// 1 -type guard
function sum(a: number | string, b: number | string){
    if(typeof a === 'string' && typeof b === 'string'){
        console.log(parseFloat(a) + parseFloat(b));
    }else if(typeof a === 'number' && typeof b === 'number'){
        console.log(a + b)
    } else {
        console.log(`Imporsivel somar ${a} + ${b}`);
    }
}

sum("200", "300");
sum(100, 10.4);
sum("20", 2)