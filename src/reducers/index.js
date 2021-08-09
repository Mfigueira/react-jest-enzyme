import { combineReducers } from 'redux';
import successReducer from './successReducer';
import guessedWordsReducer from './guessedWordsReducer';

const reducer = combineReducers({
  success: successReducer,
  guessedWords: guessedWordsReducer,
});

export default reducer;
