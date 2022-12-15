const WinningBridge = require('../src/model/WinningBridge');

describe('WinningBridge 클래스 테스트', () => {
  test.each([
    ['', '[ERROR] 공백입니다. 값을 입력해주세요.'],
    ['다리 길이', '[ERROR] 숫자로 입력해주세요.'],
    ['2', '[ERROR] 다리의 길이는 3 ~ 20 이내여야 합니다.'],
    ['21', '[ERROR] 다리의 길이는 3 ~ 20 이내여야 합니다.'],
  ])('다리 길이 입력 값에 대한 예외처리 테스트', (input, expected) => {
    expect(() => {
      WinningBridge.validateSize(input);
    }).toThrow(expected);
  });
});
