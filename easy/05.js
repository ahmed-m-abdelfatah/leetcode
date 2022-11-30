/*
Link:
https://leetcode.com/problems/majority-element/

Description:
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:
Input: nums = [3,2,3]
Output: 3

Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2

Constraints:
-> n == nums.length
-> 1 <= n <= 5 * 104
-> -109 <= nums[i] <= 109
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
// var majorityElement = function (nums) {
//   // my solution
//   // add each chars in object
//   let majority = {};
//   let max = {
//     key: 'unknown',
//     num: 0,
//   };

//   for (let i = 0; i < nums.length; i++) {
//     let key = `${nums[i]}`;

//     if (key in majority) {
//       majority[key] += 1;
//     } else {
//       majority[key] = 1; // we start count from 1 not 0
//     }

//     if (majority[key] > max.num) {
//       max.key = key;
//       max.num = majority[key];
//     }
//   }

//   return max.key;
// };

var majorityElement = function (nums) {
  // youtube solution
  let ht = {}; // ht = hash table

  for (const num of nums) {
    ht[num] = ht[num] + 1 || 1;
  }

  for (const key in ht) {
    if (ht[key] > Math.floor(nums.length / 2)) {
      return key;
    }
  }
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));

/*
Done before 20m = true
my solution = false
-------------------------------------------------------------
More info:
Solving LeetCode 169 in JavaScript (Majority Element)
https://youtu.be/nQONPoEzASM

*/
