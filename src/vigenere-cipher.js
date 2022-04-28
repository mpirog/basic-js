const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this._direct = direct

    this._alfabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']
  }

  _convert(str, key, isEncrypt) {
    if (str === undefined || key === undefined) {
      throw new Error('Incorrect arguments!')
    }
    
    str = [...str]
    key = [...key]

    const res = []

    const strPositions = str.reduce((curr, v) => {
      const pos = this._alfabet.indexOf(v.toUpperCase())
      curr.push(pos)
      
      return curr
    }, [])

    let cicle = 0

    strPositions.reduce((c, v, i) => {
      if (v < 0) {
          res.push(str[i])
          return ++c
      }

      let s = key[i - c - (key.length * cicle)]

      if (!s) {
          cicle++          
          s = key[i - c - (key.length * cicle)]
      }

      let index; 
      
      if (isEncrypt) {
        index = Math.abs(this._alfabet.indexOf(s.toUpperCase()) + v)
      } else {
        index = Math.abs(v + 26 - (this._alfabet.indexOf(s.toUpperCase())))
      }

      index -= index > 26 ? 26 : 0
      res.push(this._alfabet[index < 26 ? index : 0])

      return c
    }, 0)

    if (!this._direct) {
      res.reverse()
    }

    return res.join('')
  }

  encrypt(str, key) {
    return this._convert(str, key, true)
  }

  decrypt(str, key) {
    return this._convert(str, key, false)
  }
}

module.exports = {
  VigenereCipheringMachine
};
