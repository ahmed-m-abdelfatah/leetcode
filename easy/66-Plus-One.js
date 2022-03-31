// https://leetcode.com/problems/plus-one/

/**
 * @param {number[]} digits
 * @return {number[]}
 */

let plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++; //  last element + 1

    if (digits[i] > 9) {
      digits[i] = 0;
    } else {
      return digits;
    }
  }

  digits.unshift(1);

  return digits;
};

/**
 * @refused
 */

// var plusOne = function (digits) {
//   return `${+digits.join('') + 1}`.split('');

//   // ERROR IN BELOW
//   console.log(`${+[6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3].join('') + 1}`.split(''));
// };

/**
 * @test 1
 */

//  Input: digits = [1,2,3]
//  Output: [1,2,4]
//  Explanation: The array represents the integer 123.
//  Incrementing by one gives 123 + 1 = 124.
//  Thus, the result should be [1,2,4].
// console.log("~ plusOne([1,2,3])", plusOne([1, 2, 3]));
