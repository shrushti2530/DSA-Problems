// Problem 1: Two Sum: Given an array of integers and a target value, find the indices of the two numbers that add up to the target.

function sum(nums,target)
{
    for(let i=0 ; i<nums.length; i++)
    {
        for(let j=i+1; j<nums.length; j++)
        {
            if(nums[i]+nums[j]===target)
            {
                return [i,j];
            }
        }
    }
    return [];
}
const nums=[4,7,1,9];
const target=10;
console.log(sum(nums,target));