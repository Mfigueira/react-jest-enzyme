import { shallow } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import Congrats from './Congrats';

const setupWrapper = (props = {}) => shallow(<Congrats {...props} />);

test('renders without error', () => {
  const wrapper = setupWrapper();
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});

test('renders no text when "success" prop is false', () => {
  const wrapper = setupWrapper({ success: false });
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe('');
});

test('renders non-empty congrats message when "success" prop is true', () => {
  const wrapper = setupWrapper({ success: true });
  const message = findByTestAttr(wrapper, 'congrats-message');
  expect(message.text().length).not.toBe(0);
});
