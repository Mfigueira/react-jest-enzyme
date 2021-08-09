import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducer from '../reducers';

export const middlewares = [ReduxThunk];

const store = createStore(reducer, {}, applyMiddleware(...middlewares));

export default store;
