// eslint-disable-next-line import/extensions
import GameSavingLoader from './GameSavingLoader.js';

(async () => {
  const result = await GameSavingLoader.load();
  // eslint-disable-next-line no-console
  console.log(result);
})();
