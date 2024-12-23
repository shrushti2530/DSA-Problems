//Remove Duplicates from Array: Remove duplicate elements from an array, ensuring each element appears only once.

function removeDup(arr) {
    return [...new Set(arr)]; // Convert the array to a Set and back to an array
}


const array = [1, 2, 2, 3, 4, 4, 5];
const newArray = removeDup(array);
console.log("Array after removing duplicates:", newArray);