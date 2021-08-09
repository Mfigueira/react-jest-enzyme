import { combineReducers } from 'redux';
import successReducer from './successReducer';
import guessedWordsReducer from './guessedWordsReducer';
import secretWordReducer from './secretWordReducer';

const reducer = combineReducers({
  secretWord: secretWordReducer,
  success: successReducer,
  guessedWords: guessedWordsReducer,
});

export default reducer;
