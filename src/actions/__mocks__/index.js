module.exports = {
  ...jest.requireActual('..'),
  __esModule: true,
  setSecretWord: jest.fn().mockReturnValue({ type: 'mock' }),
};
