import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Input = ({ secretWord }) => {
  const [currentGuess, setCurrentGuess] = React.useState('');
  const success = useSelector(state => state.success);

  const handleInputChange = e => {
    setCurrentGuess(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    setCurrentGuess('');
  };

  if (success) return null;

  return (
    <div data-test="component-input">
      <Form data-test="guess-form" onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            data-test="input-box"
            type="text"
            placeholder="type a word..."
            value={currentGuess}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button data-test="submit-button" variant="primary" type="submit">
          Guess!
        </Button>
      </Form>
    </div>
  );
};

export default Input;
