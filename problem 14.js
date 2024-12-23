//problem 14:Find Duplicate Characters: Identify all duplicate characters in a string.

function findDuplicateChars(str) {
    const charCount = {};
    const dup = [];


    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

   
    for (let char in charCount) {
        if (charCount[char] > 1) {
            dup.push(char);
        }
    }

    return dup;
}

const input = "Shrushti";
console.log(findDuplicateChars(input)); 
