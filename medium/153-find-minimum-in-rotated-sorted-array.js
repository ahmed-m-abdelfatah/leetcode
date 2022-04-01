/**
 * @pseudo_code
 */

// get the middle of the arr
// if the middle < middle - 1, return middle
// else if left < middle && middle > right, left = middle + 1
// else right = middle - 1

/**
 * @param {number[]} nums
 * @return {number}
 */

var findMin = function (nums) {
  if (nums.length === 0) return -1;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return nums[0] < nums[1] ? nums[0] : nums[1];

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let middle = Math.floor((left + right) / 2);
    console.log('~ middle', middle);
    console.log('~ nums[middle]', nums[middle]);

    if (middle > 0 && nums[middle] < nums[middle - 1]) {
      return nums[middle];
    } else if (nums[left] <= nums[middle] && nums[middle] > nums[right]) {
      // nums[left] <= nums[middle] we use = cuz of [1,2] (maybe)
      left = middle + 1; // +1 to skip the middle
    } else {
      right = middle - 1; // -1 to skip the middle
    }
  }

  return nums[left];
};

/**
 * @test 1
 */

//  Input: nums = [3,4,5,1,2]
//  Output: 1
//  Explanation: The original array was [1,2,3,4,5] rotated 3 times.
console.log('~ findMin([3, 4, 5, 1, 2])', findMin([3, 4, 5, 1, 2]));

/**
 * @test 2
 */

//  Input: nums = [4,5,6,7,0,1,2]
//  Output: 0
//  Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
console.log('~ findMin([4, 5, 6, 7, 0, 1, 2])', findMin([4, 5, 6, 7, 0, 1, 2]));

/**
 * @test 3
 */

//  Input: nums = [11,13,15,17]
//  Output: 11
//  Explanation: The original array was [11,13,15,17] and it was rotated 4 times.
console.log('~ findMin([11, 13, 15, 17])', findMin([11, 13, 15, 17]));

/**
 * @pseudo_code failed
 */

// get the middle of the arr
// if middle < arr[0] then the left half is not sorted
//   remove the (sorted) right half
// else if middle > arr[n-1] then the right half is not sorted
//   remove the (sorted) left half
// else if middle > arr[0] && middle < arr[n-1] then the whole array is sorted
//   return the arr[left]
// else
//   return middle
