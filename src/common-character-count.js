const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  s2 = [...s2]
  return [...s1].reduce((c, v) => {
    const index = s2.indexOf(v)
      
    if (index > -1) {
      c++
      s2.splice(index, 1)
    }
    
    return c
  }, 0)
}

module.exports = {
  getCommonCharacterCount
};
