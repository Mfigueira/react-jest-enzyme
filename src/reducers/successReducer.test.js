import { actionTypes } from '../actions';
import successReducer from './successReducer';

test('when prev state is undefined, return false', () => {
  const newState = successReducer(undefined, {});
  expect(newState).toBe(false);
});

test('when action type is undefined, return prev state', () => {
  const newState = successReducer(false, { type: undefined });
  expect(newState).toBe(false);
});

test(`when action type is ${actionTypes.CORRECT_GUESS}, return true`, () => {
  const newState = successReducer(false, { type: actionTypes.CORRECT_GUESS });
  expect(newState).toBe(true);
});
