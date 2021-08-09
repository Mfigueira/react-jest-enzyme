import { shallow } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import Counter from './Counter';

/**
 * Creates a ShallowWrapper for the Counter component.
 * @returns {ShallowWrapper}
 */
const renderCounter = () => shallow(<Counter />);

test('renders without error', () => {
  const wrapper = renderCounter();
  const counterComponent = findByTestAttr(wrapper, 'component-counter');
  // console.log(counterComponent.length);
  expect(counterComponent.length).toBe(1);
});

test('renders counter display', () => {
  const wrapper = renderCounter();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.length).toBe(1);
});

test('counter display starts at 0', () => {
  const wrapper = renderCounter();
  const counterText = findByTestAttr(wrapper, 'count').text();
  expect(counterText).toBe('0');
});

describe('increment', () => {
  test('renders increment button', () => {
    const wrapper = renderCounter();
    const btn = findByTestAttr(wrapper, 'increment-button');
    expect(btn.length).toBe(1);
  });

  test('clicking increment button increments counter display', () => {
    // find the button
    const wrapper = renderCounter();
    const btn = findByTestAttr(wrapper, 'increment-button');

    // click the button
    btn.simulate('click');

    // find the display, and test if the number has been incremented
    // (based on the starting counter at 0)
    const count = findByTestAttr(wrapper, 'count').text();
    expect(count).toBe('1');
  });
});

describe('decrement', () => {
  test('renders decrement button', () => {
    const wrapper = renderCounter();
    const button = findByTestAttr(wrapper, 'decrement-button');
    expect(button.length).toBe(1);
  });

  test('clicking decrement button decrements counter display when counter is greater than 0', () => {
    const wrapper = renderCounter();

    // click the increment button so that the counter is greater than 0
    const incBtn = findByTestAttr(wrapper, 'increment-button');
    incBtn.simulate('click');

    // find decrement button and click
    const decBtn = findByTestAttr(wrapper, 'decrement-button');
    decBtn.simulate('click');

    // find display and test value
    const count = findByTestAttr(wrapper, 'count').text();
    expect(count).toBe('0');
  });
});

describe('error when counter goes below 0', () => {
  test('error does not show when not needed', () => {
    const wrapper = renderCounter();
    const errorDiv = findByTestAttr(wrapper, 'error-message');
    expect(errorDiv.length).toBe(0);
  });

  describe('counter is 0 and decrement is clicked', () => {
    // Usage of "beforeEach" for shared setup
    // scoping wrapper to the 'describe' test suit,
    // so it can be used in beforeEach and the tests
    let wrapper;
    beforeEach(() => {
      // no need to set counter value here; default value of 0 is good
      wrapper = renderCounter();

      // find decrement button and click
      const decBtn = findByTestAttr(wrapper, 'decrement-button');
      decBtn.simulate('click');
    });

    test('error shows', () => {
      const errorDiv = findByTestAttr(wrapper, 'error-message');
      expect(errorDiv.length).toBe(1);
    });

    test('counter still displays 0', () => {
      const count = findByTestAttr(wrapper, 'count').text();
      expect(count).toBe('0');
    });

    test('clicking increment clears the error', () => {
      // find and click the increment button
      const incButton = findByTestAttr(wrapper, 'increment-button');
      incButton.simulate('click');

      // check the class of the error message
      const errorDiv = findByTestAttr(wrapper, 'error-message');
      expect(errorDiv.length).toBe(0);
    });
  });
});
