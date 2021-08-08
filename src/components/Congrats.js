import { Alert } from 'react-bootstrap';

const Congrats = ({ success }) => {
  return (
    success && (
      <Alert data-test="component-congrats" variant="success">
        <span data-test="congrats-message">
          Congratulations! You guessed the word!
        </span>
      </Alert>
    )
  );
};

export default Congrats;
