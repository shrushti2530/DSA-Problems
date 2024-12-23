//problem no 13:Count Vowels in a String: Count the number of vowels in a given string.

function countVowels(str)
{
    const vowels='aeiou';
    let Count=0;
    for (let char of str)
    {
        if(vowels.includes(char))
        {
            Count++;
        }
    }
    return Count;
}
const inputString="Hello World";
console.log(countVowels(inputString));