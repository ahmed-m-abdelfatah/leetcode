// https://leetcode.com/problems/two-sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = function (nums, target) {
  if (nums.length === 2) return [0, 1];

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) continue;
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// console.log('~ twoSum([2, 7, 11, 15], 9)', twoSum([2, 7, 11, 15], 9));

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// console.log('~ twoSum([3, 2, 4], 6)', twoSum([3, 2, 4], 6));

// Input: nums = [3,3], target = 6
// Output: [0,1]
// console.log('~ twoSum([3, 3], 6)', twoSum([3, 3], 6));
