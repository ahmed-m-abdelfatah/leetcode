// https://leetcode.com/problems/palindrome-number

/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
  if (x < 0) return false;

  let str = `${x}`;
  //  console.log(str.length);
  //  console.log(str.length % 2);
  //  console.log(str.length % 2 === 0); // even

  let arr = str.split('');
  let arr2 = arr.concat().reverse();
  // or  https://www.javascripttutorial.net/javascript-stack/

  //  console.log(arr);
  //  console.log(arr2);
  //  console.log(arr.toString() === arr2.toString());

  return arr.toString() === arr2.toString();
};

/**
 * @test 1
 */

//  Input: x = 121
//  Output: true
//  Explanation: 121 reads as 121 from left to right and from right to left.
// console.log('~ isPalindrome(121)', isPalindrome(121));

/**
 * @test 2
 */
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// console.log('~ isPalindrome(-121)', isPalindrome(-121));

/**
 * @test 3
 */
//  Input: x = 10
//  Output: false
//  Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
// console.log('~ isPalindrome(10)', isPalindrome(10));
