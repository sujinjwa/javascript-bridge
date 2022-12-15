const BridgeGame = require('../src/model/BridgeGame');

describe('BridgeGame 클래스 테스트', () => {
  test.each([
    ['', '[ERROR] 공백입니다. 값을 입력해주세요.'],
    ['19', '[ERROR] 문자로 입력해주세요.'],
    ['u', '[ERROR] 대문자로 입력해주세요.'],
    ['d', '[ERROR] 대문자로 입력해주세요.'],
    ['R', '[ERROR] 이동할 칸은 U 또는 D 여야 합니다.'],
    ['Q', '[ERROR] 이동할 칸은 U 또는 D 여야 합니다.'],
  ])('입력 받은 이동할 칸에 대한 예외처리 테스트', (input, expected) => {
    expect(() => {
      BridgeGame.validateMoving(input);
    }).toThrow(expected);
  });

  test.each([
    ['', '[ERROR] 공백입니다. 값을 입력해주세요.'],
    ['2', '[ERROR] 문자로 입력해주세요.'],
    ['r', '[ERROR] 대문자로 입력해주세요.'],
    ['q', '[ERROR] 대문자로 입력해주세요.'],
    ['u', '[ERROR] 재시도 또는 종료 명령어는 R 또는 Q 여야 합니다.'],
    ['D', '[ERROR] 재시도 또는 종료 명령어는 R 또는 Q 여야 합니다.'],
  ])(
    '입력 받은 재시작 또는 종료 명령어에 대한 예외처리 테스트',
    (input, expected) => {
      expect(() => {
        BridgeGame.validateCommand(input);
      }).toThrow(expected);
    }
  );
});
