import { shallow } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import Input from './Input';

const renderInput = () => shallow(<Input />);

test('renders without error', () => {
  const wrapper = renderInput();
  const inputComponent = findByTestAttr(wrapper, 'component-input');
  expect(inputComponent.length).toBe(1);
});
