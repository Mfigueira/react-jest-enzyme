import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { findByTestAttr, mockStore } from '../test/testUtils';
import Congrats from './Congrats';

const setupWrapper = success =>
  mount(
    <Provider store={mockStore({ success })}>
      <Congrats />
    </Provider>
  );

test('does not render when "success" state is false', () => {
  const wrapper = setupWrapper(false);
  const message = findByTestAttr(wrapper, 'congrats-message');
  expect(message.text().length).toBeGreaterThan(0);
});

test('renders non-empty congrats message when "success" state is true', () => {
  const wrapper = setupWrapper(true);
  const message = findByTestAttr(wrapper, 'congrats-message');
  expect(message.text().length).not.toBe(0);
});
