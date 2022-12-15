const MESSAGE = Object.freeze({
  gameStart: '다리 건너기 게임을 시작합니다.\n',
  inputBridgeSize: '다리의 길이를 입력해주세요.\n',
});

const ERROR = Object.freeze({
  mustNotBeBlank: '[ERROR] 공백입니다. 값을 입력해주세요.\n',
  mustBeNumber: '[ERROR] 숫자로 입력해주세요.\n',
  mustBeInRange: '[ERROR] 다리의 길이는 3 ~ 20 이내여야 합니다.\n',
});

const BRIDGE_SIZE = Object.freeze({
  min: 3,
  max: 20,
});

const ZERO = Object.freeze(0);
const ONE = Object.freeze(1);
const UP = Object.freeze('U');
const DOWN = Object.freeze('D');

module.exports = { MESSAGE, ERROR, BRIDGE_SIZE, ZERO, ONE, UP, DOWN };
