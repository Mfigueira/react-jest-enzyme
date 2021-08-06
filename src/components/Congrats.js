import { Alert } from 'react-bootstrap';

const Congrats = ({ success }) => {
  return (
    <Alert data-test="component-congrats" variant="success">
      {success && (
        <span data-test="congrats-message">
          Congratulations! You guessed the word!
        </span>
      )}
    </Alert>
  );
};

export default Congrats;
