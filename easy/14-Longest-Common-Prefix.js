// https://leetcode.com/problems/longest-common-prefix/

/**
 * @param {string[]} strs
 * @return {string}
 */

let longestCommonPrefix = function (strs) {
  if (!strs.length) {
    return '';
  }

  //  strs[0] = "flower"
  for (let i = 0; i < strs[0].length; i++) {
    for (let s of strs) {
      if (s[i] !== strs[0][i]) {
        console.log(strs[0][i]);
        return s.slice(0, i);
      }
    }
  }

  return strs[0];
};

/**
 * @test 1
 */

//  Input: strs = ["flower","flow","flight"]
//  Output: "fl"
// console.log("~ longestCommonPrefix(['flower', 'flow', 'flight'])", longestCommonPrefix(['flower', 'flow', 'flight']));
