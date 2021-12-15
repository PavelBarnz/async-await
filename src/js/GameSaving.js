export default class GameSavng {
  constructor(obj) {
    this.reader(obj);
  }

  reader(data) {
    this.id = data.id;
    this.created = data.created;
    this.userInfo = data.userInfo;
  }
}
