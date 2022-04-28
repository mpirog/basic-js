const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n)  {
  return [...n.toString()].reduce((c, v, i, arr) => {
      let res = arr.map(v=>v)
      res.splice(i, 1)
      res = Number(res.join(''))
      
      return c = c < res ? res : c
  }, 0)
}

module.exports = {
  deleteDigit
};
