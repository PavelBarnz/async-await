// eslint-disable-next-line import/extensions
import read from './reader.js';
// eslint-disable-next-line import/extensions
import json from './parser.js';
// eslint-disable-next-line import/extensions
import GameSaving from './GameSaving.js';

export default class GameSavingLoader {
  static async load() {
    return new GameSaving(JSON.parse(await json(await read())));
  }
}
