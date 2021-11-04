// eslint-disable-next-line import/extensions
import read from './js/reader.js';
// eslint-disable-next-line import/extensions
import json from './js/parser.js';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      (async () => {
        try {
          const data = await read();
          const stringData = await json(data);
          const gameSaving = JSON.parse(stringData);
          resolve(gameSaving);
        } catch (e) {
          reject(e);
        }
      })();
    });
  }
}

GameSavingLoader.load().then((response) => {
  // eslint-disable-next-line no-unused-vars
  const result = response;
});
