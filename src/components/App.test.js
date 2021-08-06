import { shallow } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import App from './App';

/**
 * Creates a ShallowWrapper for the App component.
 * @returns {ShallowWrapper}
 */
const renderApp = () => shallow(<App />);

test('renders without error', () => {
  const wrapper = renderApp();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  console.log(appComponent.length);
  expect(appComponent.length).toBe(1);
});
