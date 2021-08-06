import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [error, setError] = useState(false);

  const handleIncrementClick = (error) => {
    if (error) setError(false);
    setCounter((counter) => counter + 1);
  };

  const handleDecrementClick = (counter) => {
    if (counter < 1) {
      setError(true);
    } else {
      setCounter((counter) => counter - 1);
    }
  };

  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">
        The counter is currently <span data-test="count">{counter}</span>
      </h1>
      <button
        data-test="increment-button"
        onClick={handleIncrementClick.bind(null, error)}
      >
        Increment counter
      </button>
      <button
        data-test="decrement-button"
        onClick={handleDecrementClick.bind(null, counter)}
      >
        Decrement counter
      </button>

      {error && (
        <div data-test="error-message">
          You cannot decrease the counter below 0!
        </div>
      )}
    </div>
  );
}

export default App;
