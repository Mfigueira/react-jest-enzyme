import { correctGuess, actionTypes } from '.';

describe('correctGuess', () => {
  test(`returns an object with type ${actionTypes.CORRECT_GUESS}`, () => {
    const action = correctGuess();
    expect(action).toStrictEqual({ type: actionTypes.CORRECT_GUESS });
  });
});
