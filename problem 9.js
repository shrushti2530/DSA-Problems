//Valid Parentheses: Check if a string containing parentheses is valid (properly closed and nested).

function isValidParentheses(str) 
{
    const stack = [];
    const parenthesesMap = 
    {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of str) 
        
        {
        if (char === '(' || char === '{' || char === '[') 
            {
            stack.push(char); 
        } 
        else if (char === ')' || char === '}' || char === ']') 
            {
            
            if (stack.length === 0 || stack.pop() !== parenthesesMap[char]) {
                return false;
            }
        }
    }

    
    return stack.length === 0;
}


const input = "{[()))]}"; 

const result = isValidParentheses(input);

console.log(`The string "${input}" is valid: ${result}`);
