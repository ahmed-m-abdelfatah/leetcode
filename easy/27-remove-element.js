// https://leetcode.com/problems/remove-element/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeElement = function (nums, val) {
  console.log('~ nums', nums);
  let i = 0;

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] != val) {
      nums[i] = nums[j];
      i++;
    }
  }

  console.log('~ nums', nums);

  return i;
};

/**
 * @refused
 */

// var removeElement = function (nums, val) {
//   let newNums = [];
//   let counter = 0;

//   for (let i = 0; i < nums.length - 1; i++) {
//     // add val to the end of the array
//     if (nums[i] === val) {
//       counter++;
//     } else {
//       newNums[i - counter] = nums[i];
//     }
//   }

//   let output = newNums.length;

//   for (let i = 0; i <= counter; i++) {
//     newNums[newNums.length] = '_';
//   }

//   console.log('~ nums', nums);
//   console.log('~ newNums', newNums);

//   console.log('~ nums.length', nums.length);
//   console.log('~ newNums.length', newNums.length);

//   nums = null;
//   newNums = [];
//   console.log('~ nums', nums);

//   return output;
// };

/**
 * @test 1
 */

//  Input: nums = [3,2,2,3], val = 3
//  Output: 2, nums = [2,2,_,_]
//  Explanation: Your function should return k = 2, with the first two elements of nums being 2.
//  It does not matter what you leave beyond the returned k (hence they are underscores).
// console.log('~ removeElement([3,2,2,3], 3)', removeElement([3, 2, 2, 3], 3));

/**
 * @test 2
 */

// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// console.log(
//   '~ removeElement([0,1,2,2,3,0,4,2], 2)',
//   removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2),
// );
