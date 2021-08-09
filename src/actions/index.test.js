import moxios from 'moxios';
import { mockStore } from '../test/testUtils';
import { setSecretWord, correctGuess, actionTypes } from '.';

describe.skip('correctGuess', () => {
  test(`returns an object with type ${actionTypes.CORRECT_GUESS}`, () => {
    const action = correctGuess();
    expect(action).toStrictEqual({ type: actionTypes.CORRECT_GUESS });
  });
});

describe('setSecretWord', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test('secretWord is returned', async () => {
    const store = mockStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: 'party',
      });
    });

    await store.dispatch(setSecretWord());
    const { secretWord } = store.getState();
    expect(secretWord).toBe('party');
  });
});
