const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  _chain: [],

  getLength() {
   return this._chain.lenght
  },
  addLink(value) {
    this._chain.push(''+value)
    return this
  },
  removeLink(position) {
    if (isNaN(position) || !this._chain[--position]) {      
      this._chain = []
      throw new Error('You can\'t remove incorrect link!')
    }

    this._chain.splice(position, 1)
    return this
  },
  reverseChain() {
    this._chain.reverse()
    return this
  },
  finishChain() {
    const result = `( ${this._chain.join(' )~~( ')} )`
    this._chain = []
    return result
  }
};

module.exports = {
  chainMaker
};
