let a = document.querySelector("#nmbr");
let b = document.querySelector(".cal");
let resultDiv = document.querySelector("#result")
let num;
// let factorial;

// b.addEventListener("click", () => {  
//     let nmbr = a.value;  // Corrected from innerText to value
//     num = Number(nmbr);  // Convert the input value to a number
//     factorial = 1;  // Initialize factorial to 1

//     // Check if the input is a valid number
//     if (isNaN(num) || num < 0) {
//         let p = document.createElement('p');
//         p.innerText = "Please Enter Only Numbers...";
//         resultDiv.textContent = "Please enter a valid positive number.";
//         return;  // Exit the function if the input is invalid
//     }

//     // Calculate factorial
//     for (let i = num; i > 0; i--) {
//         factorial *= i;
//     }
    
//     resultDiv.textContent = `The factorial of the given number ${num} is equal to ${factorial}.`;
// });

// BY REDUCE METHOD
b.addEventListener("click", () =>{

    let nmbr = a.value;
    num = Number(nmbr);
    if(isNaN(num) || num < 0){
        resultDiv.textContent = `Please Enter Valid Positive Integers Only...`
    }
    function factorial(num) {
        if (num === 0) {
            return 1;
        }
        let arr = Array.from(Array(num+1).keys());
        arr.shift();
        let c = arr.reduce((a, b) => a *b);
        return c;
    }
    resultDiv.textContent = `Factorial = ${factorial(num)}`;
})


