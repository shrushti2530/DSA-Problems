//Merge Two Sorted Arrays: Combine two sorted arrays into a single sorted array. javascript program

function mergeSortArr(arr1, arr2) {

    let mergedArray = [];
    let i = 0;
    let j = 0;


    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        }
        else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }


    while (i < arr1.length) {

        mergedArray.push(arr1[i]);
        i++;
    }


    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}


const arr1 = [1, 1, 5, 74];
const arr2 = [2, 43, 63, 98];
const mergedArray = mergeSortArr(arr1, arr2);
console.log("Merged sorted array:", mergedArray);