import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Creates a ShallowWrapper for the App component.
 * @returns {ShallowWrapper}
 */
const renderApp = () => shallow(<App />);

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attr!
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);

test('renders without error', () => {
  const wrapper = renderApp();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  console.log(appComponent.length);
  expect(appComponent.length).toBe(1);
});
