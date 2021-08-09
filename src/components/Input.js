import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { guessWord } from '../actions';

const Input = () => {
  const [currentGuess, setCurrentGuess] = React.useState('');
  const success = useSelector(state => state.success);
  const dispatch = useDispatch();

  const handleInputChange = e => {
    setCurrentGuess(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    dispatch(guessWord(currentGuess));
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
