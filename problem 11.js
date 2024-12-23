//problem 11: Find All Subsets: Generate all possible subsets of a given set of numbers.


function Subsets(nums) {
    const result = [];


    function backtrack(start, currentSubset) {

        result.push([...currentSubset]);


        for (let i = start; i < nums.length; i++) {

            currentSubset.push(nums[i]);

            backtrack(i + 1, currentSubset);
            currentSubset.pop();
        }
    }


    backtrack(0, []);
    return result;
}


const nums = [1, 2, 3];
const subsets = Subsets(nums);
console.log(subsets);