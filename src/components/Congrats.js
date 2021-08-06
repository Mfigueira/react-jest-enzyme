const Congrats = ({ success }) => {
  return (
    <div data-test="component-congrats">
      {success && (
        <p data-test="congrats-message">
          Congratulations! You guessed the word!
        </p>
      )}
    </div>
  );
};

export default Congrats;
