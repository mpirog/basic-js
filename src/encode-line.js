const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  str = [...str]

  let c = 1,
      prev = '',
      res = ''

  while(str.length) {
    k = str.shift()

    prev = k

    if (k === str[0]) {
        c++
    } else {
        res += (c > 1 ? c : '') + prev
        c = 1
    }
  }
  
  return res
}

module.exports = {
  encodeLine
};
