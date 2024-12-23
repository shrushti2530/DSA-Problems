//problem 10: Move Zeroes: Move all zeroes in an array to the end while maintaining the order of non-zero elements.

function moveZero(arr) {
    let nonZero= 0; 

    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[nonZero] = arr[i];
            nonZero++;
        }
    }

     
    for (let i = nonZero; i < arr.length; i++) {
        arr[i] = 0;
    }

    return arr; 
}


const array = [0, 1, 0, 3, 12];
console.log(moveZero(array)); 