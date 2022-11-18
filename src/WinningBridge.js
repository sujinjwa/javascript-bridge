const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const Validation = require('./utils/Validation');
const BridgeMaker = require('./BridgeMaker');

class WinningBridge {
  #size;
  #winningBridge;

  constructor(size) {
    this.#size = this.validate(size);
  }

  validate(size) {
    Validation.checkNumberType(size);
    Validation.checkRange(size);
  }

  makeWinningBridge(size) {
    this.#winningBridge = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate
    );
    console.log(this.#winningBridge);
  }

  isSameDirection(currDirection, currOrder) {
    return this.#winningBridge[currOrder] === currDirection;
  }
}

module.exports = WinningBridge;
