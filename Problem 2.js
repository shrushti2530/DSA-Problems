//Reverse a String: Write a function to reverse a given string.

 
function reverseString(str) {
   
    return str.split('').reverse().join('');
}


const input = "Hello";
const result = reverseString(input);
console.log(result);