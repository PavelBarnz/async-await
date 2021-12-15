import read from '../js/reader.js';


test('тест функции read', () => {
  const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}'
  const buffer = new ArrayBuffer(data.length * 2);
  const typeArray = new Uint16Array(buffer);


  (async () => {
    const result = read();
    result.then(response => {
      expect(response).toEqual(typeArray);
    })
  })()
});
