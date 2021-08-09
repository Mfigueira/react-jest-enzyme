import axios from 'axios';

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
};

export const getSecretWord = async () => {
  const { data } = await axios.get('http://localhost:3030');
  return data;
};

export const correctGuess = () => ({
  type: actionTypes.CORRECT_GUESS,
});
