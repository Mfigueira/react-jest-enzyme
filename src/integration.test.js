// integration testing for redux actions and reducers state changes
import { mockStore } from './test/testUtils';
import { guessWord } from './actions';

describe('guessWord action dispatcher', () => {
  const secretWord = 'party';
  const unsuccessfulGuessWord = 'train';

  describe('no guessed words', () => {
    let store;
    const initialState = { secretWord };
    beforeEach(() => {
      store = mockStore(initialState);
    });

    test('updates state correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessfulGuessWord));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [
          { guessedWord: unsuccessfulGuessWord, letterMatchCount: 3 },
        ],
      };
      expect(newState).toEqual(expectedState);
    });

    test('updates state correctly for successful guess', () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [{ guessedWord: secretWord, letterMatchCount: 5 }],
      };
      expect(newState).toEqual(expectedState);
    });
  });

  describe('some guessed words', () => {
    let store;
    const initialState = {
      secretWord,
      guessedWords: [{ guessedWord: 'part', letterMatchCount: 4 }],
    };
    beforeEach(() => {
      store = mockStore(initialState);
    });

    test('updates state correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessfulGuessWord));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        success: false,
        guessedWords: [
          ...initialState.guessedWords,
          { guessedWord: unsuccessfulGuessWord, letterMatchCount: 3 },
        ],
      };
      expect(newState).toEqual(expectedState);
    });

    test('updates state correctly for successful guess', () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        success: true,
        guessedWords: [
          ...initialState.guessedWords,
          { guessedWord: secretWord, letterMatchCount: 5 },
        ],
      };
      expect(newState).toEqual(expectedState);
    });
  });
});
