import { applyMiddleware, createStore } from 'redux';
import reducer from '../reducers';
import { middlewares } from '../store';

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attr!
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) =>
  wrapper.find(`[data-test="${val}"]`);

export const mockStore = initialState =>
  createStore(reducer, initialState, applyMiddleware(...middlewares));
