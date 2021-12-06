// eslint-disable-next-line import/extensions
import read from './reader.js';
// eslint-disable-next-line import/extensions
import json from './parser.js';

export default class GameSavingLoader {
  static async load() {
    const buffer = await read();
    const result = await json(buffer);
    return JSON.parse(result);
  }
}

(async () => {
  const GameSaving = await GameSavingLoader.load();
  return GameSaving;
})();
