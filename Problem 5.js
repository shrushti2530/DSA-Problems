//Factorial Calculation: Calculate the factorial of a given non-negative integer.

function Factorial(n) {
   
    let factorial = 1; 
    for (let i = 1; i <= n; i++) 
        {
        factorial *= i; 
    }
    return factorial;
}


const number = 5; // Change this value to calculate a different factorial
const result = Factorial(number);
console.log(`Factorial of ${number} is: ${result}`);
