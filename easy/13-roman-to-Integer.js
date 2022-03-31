// https://leetcode.com/problems/roman-to-integer/

/**
 * @explain
 */

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// I can be placed before V (5) and X (10) to make IV (4) and IX (9).
// X can be placed before L (50) and C (100) to make XC (40) and LC(90).
// C can be placed before D (500) and M (1000) to make CD (400) and CM (900).

/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
  const legend = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    if (legend[s[i]] < legend[s[i + 1]]) {
      total += legend[s[i + 1]] - legend[s[i]];
      i++;
    } else {
      total += legend[s[i]];
    }
  }

  return total;
};

/**
 * @test 1
 */

//  Input: s = "III"
//  Output: 3
//  Explanation: III = 3.
// console.log('~ romanToInt("III")', romanToInt('III'));

/**
 * @test 2
 */

//  Input: s = "LVIII"
//  Output: 58
//  Explanation: L = 50, V= 5, III = 3.
// console.log('~ romanToInt("LVIII")', romanToInt('LVIII'));

/**
 * @test 3
 */

//  Input: s = "MCMXCIV"
//  Output: 1994
//  Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
// console.log('~ romanToInt("MCMXCIV")', romanToInt('MCMXCIV'));
