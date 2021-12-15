import json from '../js/reader.js';

test('тест функции json', () => {
  const result = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';

  const pr = json(result);
  pr.then((response) => {
    expect(response).toEqual(result);
  });
});
