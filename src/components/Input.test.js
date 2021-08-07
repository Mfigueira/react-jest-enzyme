import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import Input from './Input';

// Option for mocking a hook that allows destructured imports on the component
// const mockSetCurrentGuess = jest.fn();
// jest.mock('react', () => ({
//   ...jest.requireActual('react'),
//   useState: state => [state, mockSetCurrentGuess],
// }));

const renderInput = () => shallow(<Input />);

test('renders without error', () => {
  const wrapper = renderInput();
  const inputComponent = findByTestAttr(wrapper, 'component-input');
  expect(inputComponent.length).toBe(1);
});

describe('state controlled input filed', () => {
  let mockSetCurrentGuess;
  let wrapper;
  beforeEach(() => {
    mockSetCurrentGuess = jest.fn();
    React.useState = jest.fn(() => ['', mockSetCurrentGuess]);

    wrapper = renderInput();
  });

  test('state is updated with the correct value from input', () => {
    const inputBox = findByTestAttr(wrapper, 'input-box');

    const mockEvent = { target: { value: 'train' } };
    inputBox.simulate('change', mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  });

  test('state is cleared on form submit', () => {
    const guessForm = findByTestAttr(wrapper, 'guess-form');

    guessForm.simulate('submit', { preventDefault() {} });

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
  });
});
