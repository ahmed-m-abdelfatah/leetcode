/*
Link:
https://leetcode.com/problems/merge-sorted-array/description/

Description:
Given a string s consisting of words and spaces, return the length of the last word in the string.
A word is a maximal substring consisting of non-space characters only.

Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

Example 2:
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3:
Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.

Constraints:
-> 1 <= s.length <= 104
-> s consists of only English letters and spaces ' '.
-> There will be at least one word in s.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  // easy solution
  // let arr = s.trim().split(' ');
  // return arr[arr.length - 1].length;

  // complicated solution
  // loop from last to first after find one space after text
  let i = s.length - 1;
  let firstSpaceAfterChars = false;
  let firstChar = false;
  let count = 0;

  while (i >= 0) {
    let current = s[i];
    i--;

    if (current !== ' ') {
      firstChar = true;
      count++;
    }

    if (current === ' ' && firstChar === false) {
      continue;
    }

    if (current === ' ' && firstChar === true) {
      firstSpaceAfterChars = true;
    }

    if (firstSpaceAfterChars === true) {
      if (count === 0) {
        count = s.length;
      }

      break;
    }
  }

  return count;
};

console.log(lengthOfLastWord('Hello World'));
console.log(lengthOfLastWord('   fly me   to   the moon  '));
console.log(lengthOfLastWord('luffy is still joyboy'));

/*
Done before 20m = true
my solution = true
-------------------------------------------------------------
More info:
How To Solve "58. Length of Last Word" on LeetCode - JavaScript Easy
https://youtu.be/9cXaKJpxPBU

*/
