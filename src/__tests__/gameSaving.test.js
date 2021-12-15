import GameSaving from '../js/GameSaving.js';


test('тест класса GameSaving', () => {
  const data = {"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}};

  (async () => {
    const testClass = new GameSaving(data);
    expect(testClass.created).toEqual(1546300800);
    expect(testClass.id).toEqual(9);
    expect(testClass.userInfo).toEqual({"id":1,"name":"Hitman","level":10,"points":2000});
  })()
});
