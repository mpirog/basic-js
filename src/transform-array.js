const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`)
  }

  return arr.map(v=>v).reduce((curr, val, i, arr) => {
      switch (val) {
          case '--discard-next':
              arr.splice(i+1, 1)
              break

          case '--discard-prev':
              curr.splice(i-1, 1)
              break

          case '--double-next':
              arr[i+1] && !isNaN(arr[i+1]) ? curr.push(arr[i+1]) : 0
              break

          case '--double-prev':
              arr[i-1] && !isNaN(arr[i-1]) ? curr.push(arr[i-1]) : 0
              break

          default:
              curr.push(val)
      }

      return curr

  }, [])
}

module.exports = {
  transform
};
