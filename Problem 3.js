// Palindrome Check: Determine whether a given string is a palindrome.

function isPalindrome(str) {
  
    str = str.toLowerCase();
   
   
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    
    return str === reversedStr;
}

console.log(isPalindrome("hello"));