import Congrats from './Congrats';
import Counter from './Counter';

const App = () => {
  return (
    <div data-test="component-app">
      <h1>App</h1>

      <Counter />
      <Congrats />
    </div>
  );
};

export default App;
