const GuessedWords = ({ guessedWords }) => {
  const renderInstructions = (
    <p data-test="guess-instructions">Try guessing the secret word!</p>
  );

  const renderGuessedTable = (
    <ul data-test="guessed-words">
      {guessedWords.map((gw, idx) => (
        <li key={idx} data-test="guessed-word">
          <strong>{gw.guessedWord}</strong> - Matched letters:{' '}
          {gw.letterMatchCount}
        </li>
      ))}
    </ul>
  );

  return (
    <div data-test="component-guessed-words">
      {!guessedWords.length ? renderInstructions : renderGuessedTable}
    </div>
  );
};

export default GuessedWords;
