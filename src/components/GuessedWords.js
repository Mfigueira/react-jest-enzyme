const GuessedWords = ({ guessedWords }) => {
  const renderInstructions = (
    <p data-test="guess-instructions">Try guessing what the secret word is!</p>
  );

  const renderGuessedTable = null;

  return (
    <div data-test="component-guessed-words">
      {!guessedWords.length ? renderInstructions : renderGuessedTable}
    </div>
  );
};

export default GuessedWords;
