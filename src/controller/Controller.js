const OutputView = require('../view/OutputView');
const InputView = require('../view/InputView');
const WinningBridge = require('../model/WinningBridge');
const { MESSAGE } = require('../utils/constants');

class Controller {
  constructor() {
    this.winningBridge = new WinningBridge();
  }
  init() {
    OutputView.printMessage(MESSAGE.gameStart);

    this.inputBridgeSize();
  }

  inputBridgeSize() {
    InputView.readBridgeSize(this.validateSize.bind(this));
  }

  validateSize(size) {
    try {
      this.winningBridge.validateSize(size);
    } catch (error) {
      OutputView.printMessage(error);
      this.inputBridgeSize();
    }

    this.makeWinningBride(size);
  }

  makeWinningBride(size) {
    this.winningBridge.make(size);
  }
}

module.exports = Controller;
