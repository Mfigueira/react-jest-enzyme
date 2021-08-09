import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { findByTestAttr, mockStore } from '../../test/testUtils';
import { getSecretWord as mockGetSecretWord } from '../../util/http';
import App from './App';

// activate global mock to make sure getSecretWord doesn't make network calls
jest.mock('../../util/http');

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

describe('get secret word', () => {
  beforeEach(() => {
    mockGetSecretWord.mockClear();
  });

  test('get secret word on app mount', () => {
    renderApp();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
  });

  test('get secret word does not run on app update', () => {
    const wrapper = renderApp();
    mockGetSecretWord.mockClear();

    wrapper.setProps();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
  });
});
