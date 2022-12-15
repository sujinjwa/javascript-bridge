const Validation = require('../utils/Validation');
const { UP, MOVE, BLANK } = require('../utils/constants');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #tryingCount = 1;
  #upperBridge = [];
  #lowerBridge = [];
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  static validateMoving(direction) {
    Validation.checkBlank(direction);
    Validation.checkStringType(direction);
    Validation.checkUpperCaseOfDirection(direction);
    Validation.checkValidDirection(direction);
  }

  static validateCommand(command) {
    Validation.checkBlank(command);
    Validation.checkStringType(command);
    Validation.checkUpperCaseOfCommand(command);
    Validation.checkValidCommand(command);
  }

  canMove(direction, winningBridge) {
    return winningBridge.isSameDirection(direction, this.#upperBridge.length);
  }

  move(CAN_MOVE, direction) {
    if (direction === UP.upperCase) {
      this.#upperBridge.push(CAN_MOVE ? MOVE.canGo : MOVE.cantGo);
      this.#lowerBridge.push(BLANK);
      return;
    }

    this.#upperBridge.push(BLANK);
    this.#lowerBridge.push(CAN_MOVE ? MOVE.canGo : MOVE.cantGo);
  }

  getUpperBridge() {
    return this.#upperBridge;
  }

  getLowerBridge() {
    return this.#lowerBridge;
  }

  isSucceeded(winningBridge) {
    return winningBridge.isSameLength(this.#upperBridge);
  }

  getTryingCount() {
    return this.#tryingCount;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#tryingCount += 1;
    this.#upperBridge = [];
    this.#lowerBridge = [];
  }
}

module.exports = BridgeGame;
