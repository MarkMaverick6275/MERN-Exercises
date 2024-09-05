let firstNum = prompt("Enter the First Number: ");
let secondNum = prompt("Enter the Second Number: ");
let operation = prompt("Enter the Operation You Wanna Perform with these Numbers: ");

const faultyoperations = {
    '+': '-',
    '*': '+',
    '-':'/',
    '/':'**',
}
let rand = Math.random();
console.log(rand)
if (rand < 0.1) {
    operation = faultyoperations[operation];
    console.log(`The Result is = ${eval(`${firstNum} ${operation} ${secondNum}`)}`)
}
else{
    console.log(`The Result is = ${eval(`${firstNum} ${operation} ${secondNum}`)}`)
}