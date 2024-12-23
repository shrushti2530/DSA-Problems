// problem 12: Find the Second Largest Element: Identify the second largest element in an array.

function secondLargestNum(arr) 
{
    if (arr.length < 2) 
        {

        return null;

       }
    let large = -Infinity;
    let secondLarge = -Infinity;

    for (let num of arr) 
        {
        if (num > large) 
            {
            secondLarge = large;
            large = num;
        } 
        else if (num > secondLarge && num < large) 
            {
          
            secondLarge = num;
          }
    }
    return secondLarge === -Infinity ? null : secondLarge;
}

const array = [4, 10, 34, 23, 1];
console.log(secondLargestNum(array));

