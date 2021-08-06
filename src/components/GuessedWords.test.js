import { shallow } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import GuessedWords from './GuessedWords';

const setupWrapper = (props = {}) => shallow(<GuessedWords {...props} />);

describe('if there are no words guessed', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setupWrapper({ guessedWords: [] });
  });

  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });

  test('renders instructions to guess a word', () => {
    const instructions = findByTestAttr(wrapper, 'guess-instructions');
    expect(instructions.text().length).not.toBe(0);
  });
});

describe('if there are words guessed', () => {});
