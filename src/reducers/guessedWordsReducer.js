import { actionTypes } from '../actions';

const guessedWordsReducer = (state = [], action) => {
  if (action.type === actionTypes.GUESS_WORD) {
    return [...state, action.payload];
  }

  return state;
};

export default guessedWordsReducer;
