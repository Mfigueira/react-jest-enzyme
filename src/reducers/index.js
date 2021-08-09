import { combineReducers } from 'redux';
import successReducer from './successReducer';

const reducer = combineReducers({
  success: successReducer,
});

export default reducer;
