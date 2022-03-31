// https://leetcode.com/problems/capitalize-the-title

/**
 * @param {string} title
 * @return {string}
 */

var capitalizeTitle = function (title) {
  let words = title.toLowerCase().split(' ');
  let out = '';

  for (let word of words) {
    if (word.length > 2) {
      out += word[0].toUpperCase() + word.slice(1) + ' ';
    } else {
      out += word + ' ';
    }
  }

  //   console.log(out.substring(0, out.length - 1)); // Ahmed is Testing The Code|
  //   console.log(out); // Ahmed is Testing The Code |
  //   console.log(out.trim()); // Ahmed is Testing The Code|

  return out.trim();
};

/**
 * @revision for in vs for off
 */

// let list = [4, 5, 6];

// for (let i in list) {
//    console.log(i); // "0", "1", "2",
// }

// for (let i of list) {
//    console.log(i); // "4", "5", "6"
// }

/**
 * @test 1
 */

// Input: title = "capiTalIze tHe titLe"
// Output: "Capitalize The Title"
// Explanation:
// Since all the words have a length of at least 3, the first letter of each word is uppercase, and the remaining letters are lowercase.
// console.log(
//   "~ capitalizeTitle('capiTalIze tHe titLe')",
//   capitalizeTitle('capiTalIze tHe titLe'),
// );

/**
 * @test 2
 */

// Input: title = "First leTTeR of EACH Word"
// Output: "First Letter of Each Word"
// Explanation:
// The word "of" has length 2, so it is all lowercase.
// The remaining words have a length of at least 3, so the first letter of each remaining word is uppercase, and the remaining letters are lowercase.
// console.log(
//   "~ capitalizeTitle('First leTTeR of EACH Word')",
//   capitalizeTitle('First leTTeR of EACH Word'),
// );

/**
 * @test 3
//  */
//  Input: title = "i lOve leetcode"
//  Output: "i Love Leetcode"
//  Explanation:
//  The word "i" has length 1, so it is lowercase.
//  The remaining words have a length of at least 3, so the first letter of each remaining word is uppercase, and the remaining letters are lowercase.
// console.log(
//   "~ capitalizeTitle('i lOve leetcode')",
//   capitalizeTitle('i lOve leetcode'),
// );
