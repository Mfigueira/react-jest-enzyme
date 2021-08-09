import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { findByTestAttr, mockStore } from '../../test/testUtils';
import { setSecretWord as mockSetSecretWord } from '../../actions';
import App from './App';

// activate global mock to make sure getSecretWord doesn't make network calls
jest.mock('../../actions');

const renderApp = () =>
  mount(
    <Provider store={mockStore()}>
      <App />
    </Provider>
  );

test('renders without error', () => {
  const wrapper = renderApp();
  // console.log(wrapper.debug());
  const appComponent = findByTestAttr(wrapper, 'component-app').hostNodes();
  // console.log(appComponent.length);
  expect(appComponent.length).toBe(1);
});

describe('set secret word', () => {
  beforeEach(() => {
    mockSetSecretWord.mockClear();
  });

  test('set secret word on app mount', () => {
    renderApp();
    expect(mockSetSecretWord).toHaveBeenCalledTimes(1);
  });

  test('set secret word does not run on app update', () => {
    const wrapper = renderApp();
    mockSetSecretWord.mockClear();

    wrapper.setProps();
    expect(mockSetSecretWord).toHaveBeenCalledTimes(0);
  });
});
