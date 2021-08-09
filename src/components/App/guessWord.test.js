// functional test - testing behavior
// 'mounting' the entire App component (deep, with children rendered !== from 'shallow')
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { findByTestAttr, mockStore } from '../../test/testUtils';
import App from './App';

// activate global mock to make sure getSecretWord doesn't make network calls
jest.mock('../../actions');

const setupAppWrapper = (initialState = {}) => {
  const appWrapper = mount(
    <Provider store={mockStore(initialState)}>
      <App />
    </Provider>
  );

  const inputBox = findByTestAttr(appWrapper, 'input-box').hostNodes();
  inputBox.simulate('change', { target: { value: 'train' } });

  const guessForm = findByTestAttr(appWrapper, 'guess-form').hostNodes();
  guessForm.simulate('submit', { preventDefault() {} });

  return appWrapper;
};

describe('no words has been guessed', () => {
  let appWrapper;
  beforeEach(() => {
    appWrapper = setupAppWrapper({
      secretWord: 'party',
      success: false,
      guessedWords: [],
    });
  });

  test('creates a GuessWords list with 1 item', () => {
    const gussedWordItems = findByTestAttr(
      appWrapper,
      'guessed-word'
    ).hostNodes();
    expect(gussedWordItems).toHaveLength(1);
  });
});

describe('some words has been guessed', () => {
  let appWrapper;
  beforeEach(() => {
    appWrapper = setupAppWrapper({
      secretWord: 'party',
      success: false,
      guessedWords: [{ guessedWord: 'agile', letterMatchCount: 1 }],
    });
  });

  test('creates a GuessWords list with 2 items', () => {
    const gussedWordItems = findByTestAttr(
      appWrapper,
      'guessed-word'
    ).hostNodes();
    expect(gussedWordItems).toHaveLength(2);
  });
});

describe('guessed secret word', () => {
  let appWrapper;
  beforeEach(() => {
    appWrapper = setupAppWrapper({
      secretWord: 'party',
      success: false,
      guessedWords: [{ guessedWord: 'agile', letterMatchCount: 1 }],
    });

    const inputBox = findByTestAttr(appWrapper, 'input-box').hostNodes();
    inputBox.simulate('change', { target: { value: 'party' } });

    const guessForm = findByTestAttr(appWrapper, 'guess-form').hostNodes();
    guessForm.simulate('submit', { preventDefault() {} });
  });

  test('creates a GuessWords list with 3 items', () => {
    const gussedWordItems = findByTestAttr(
      appWrapper,
      'guessed-word'
    ).hostNodes();
    expect(gussedWordItems).toHaveLength(3);
  });

  test('renders Congrats component', () => {
    const congratsComponent = findByTestAttr(
      appWrapper,
      'component-congrats'
    ).hostNodes();
    expect(congratsComponent.length).toBe(1);
  });

  test('does not render Input component', () => {
    const inputComponent = findByTestAttr(
      appWrapper,
      'component-input'
    ).hostNodes();
    expect(inputComponent.length).toBe(0);
  });
});
