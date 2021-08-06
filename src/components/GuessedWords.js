import { ListGroup } from 'react-bootstrap';

const GuessedWords = ({ guessedWords }) => {
  const renderInstructions = (
    <p data-test="guess-instructions">Try guessing the secret word!</p>
  );

  const renderGuessedTable = (
    <ListGroup as="ul" data-test="guessed-words">
      {guessedWords.map((gw, idx) => (
        <ListGroup.Item as="li" key={idx} data-test="guessed-word">
          <strong>{gw.guessedWord}</strong> - Matched letters:{' '}
          {gw.letterMatchCount}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );

  return (
    <div data-test="component-guessed-words">
      {!guessedWords.length ? renderInstructions : renderGuessedTable}
    </div>
  );
};

export default GuessedWords;
