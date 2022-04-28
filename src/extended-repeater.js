const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
   str = ''+ str;
  
    let separator = options.separator||'+'
    let repeatTimes = options.repeatTimes||1
  
    let addition = options.addition !== undefined ? ''+options.addition : ''
    addition = ''+addition
    let additionRepeatTimes = options.additionRepeatTimes||1
    let additionSeparator = options.additionSeparator||'|'
  
    let additions = []
  
    for (let i = 0; i < additionRepeatTimes; i++) {
      additions.push(addition)
    }  
    
    let result = []
  
    for (let i = 0; i < repeatTimes; i++) {
      result.push(str + additions.join(additionSeparator))
    }
  
    return result.join(separator)
}

module.exports = {
  repeater
};
