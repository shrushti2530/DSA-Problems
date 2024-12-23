function Array(arr) {
    let max = arr[0]; 

    for (let i = 1; i < arr.length; i++) 
    {
        if (arr[i] > max) {
            max = arr[i]; 
        }
    }

    return max; 
}

const array = [3, 5, 1, 8, 2];
const maxNumber = Array(array);
console.log("The maximum number in the array is:", maxNumber);