// eslint-disable-next-line import/extensions
import GameSavingLoader from './GameSavingLoader.js';

GameSavingLoader.load().then((response) => {
  // eslint-disable-next-line no-unused-vars
  const GameSaving = response;
  return GameSaving;
});
