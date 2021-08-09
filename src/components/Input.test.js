import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { findByTestAttr, mockStore } from '../test/testUtils';
import Input from './Input';

// Option for mocking a hook that allows destructured imports on the component
// const mockSetCurrentGuess = jest.fn();
// jest.mock('react', () => ({
//   ...jest.requireActual('react'),
//   useState: state => [state, mockSetCurrentGuess],
// }));

const setupInput = (initialState = {}, props = {}) =>
  mount(
    <Provider store={mockStore(initialState)}>
      <Input {...props} />
    </Provider>
  );

describe('render', () => {
  let wrapper;

  describe('when success is true', () => {
    beforeEach(() => {
      wrapper = setupInput({ success: true });
    });

    test('input box does not render', () => {
      const inputComponent = findByTestAttr(wrapper, 'component-input');
      expect(inputComponent.length).toBe(0);
    });
  });

  describe('when success is false', () => {
    beforeEach(() => {
      wrapper = setupInput({ success: false });
    });

    test('input box renders without error', () => {
      const inputComponent = findByTestAttr(
        wrapper,
        'component-input'
      ).hostNodes();
      expect(inputComponent.length).toBe(1);
    });
  });
});

describe('state controlled input filed', () => {
  let mockSetCurrentGuess;
  let wrapper;
  beforeEach(() => {
    mockSetCurrentGuess = jest.fn();
    React.useState = jest.fn(() => ['', mockSetCurrentGuess]);

    wrapper = setupInput({ success: false });
  });

  test('state is updated with the correct value from input', () => {
    const inputBox = findByTestAttr(wrapper, 'input-box').hostNodes();

    const mockEvent = { target: { value: 'train' } };
    inputBox.simulate('change', mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  });

  test('state is cleared on form submit', () => {
    const guessForm = findByTestAttr(wrapper, 'guess-form').hostNodes();

    guessForm.simulate('submit', { preventDefault() {} });

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
  });
});
