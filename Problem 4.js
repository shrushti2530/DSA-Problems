//Fibonacci Sequence: Generate the first N numbers in the Fibonacci sequence.
function fibonacciSeries(n) {
   
    
    const fibonacci = [0, 1];
    for (let i = 2; i < n; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
    return fibonacci;
}

const N = 10; 
const result = fibonacciSeries(N);
console.log("Fibonacci Sequence:", result);
