import axios from 'axios';
import { getLetterMatchCount } from '../util/helpers';

export const actionTypes = {
  SET_SECRET_WORD: 'SET_SECRET_WORD',
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
};

export const setSecretWord = () => async dispatch => {
  const { data } = await axios.get('http://localhost:3030');

  dispatch({
    type: actionTypes.SET_SECRET_WORD,
    payload: data,
  });
};

export const guessWord = guessedWord => (dispatch, getState) => {
  const { secretWord } = getState();
  const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

  dispatch({
    type: actionTypes.GUESS_WORD,
    payload: {
      guessedWord,
      letterMatchCount,
    },
  });

  if (secretWord === guessedWord) {
    dispatch({
      type: actionTypes.CORRECT_GUESS,
    });
  }
};
