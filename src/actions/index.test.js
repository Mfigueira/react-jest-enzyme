import moxios from 'moxios';
import { getSecretWord, correctGuess, actionTypes } from '.';

describe('getSecretWord', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test('secretWord is returned', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: 'party',
      });
    });

    const secretWord = await getSecretWord();
    expect(secretWord).toBe('party');
  });
});

describe('correctGuess', () => {
  test(`returns an object with type ${actionTypes.CORRECT_GUESS}`, () => {
    const action = correctGuess();
    expect(action).toStrictEqual({ type: actionTypes.CORRECT_GUESS });
  });
});
