// https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  const left = [];
  const legend = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      left.push(s[i]);
    } else if (s[i] !== legend[left.pop()]) {
      return false;
    }
  }

  return left.length ? 0 : 1;
};

/**
 * @test 1
 */

//  Input: s = "()"
//  Output: true
// console.log("~ isValid('()')", isValid('()'));

/**
 * @test 2
 */

//  Input: s = "()[]{}"
//  Output: true
// console.log("~ isValid('()[]{}')", isValid('()[]{}'));

/**
 * @test 3
 */

//  Input: s = "(]"
//  Output: false
// console.log("~ isValid('(]')", isValid('(]'));
