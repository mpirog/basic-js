const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  res = {}

  domains.forEach(el => {
      console.log(el)
      let prev = ''
      el.split('.').reverse().forEach((e, i, arr) => {
          prev += '.' + e
          
          if (!res.hasOwnProperty(prev)) {
              res[prev] = 0
          }

          res[prev]++
      })
  });
  
  return res
}

module.exports = {
  getDNSStats
};
