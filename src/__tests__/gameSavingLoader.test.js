import GameSavingLoader from '../js/GameSavingLoader.js';


test('тест функции GameSavingLoader', () => {
  const data = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  };

  (async () => {
    const result = await GameSavingLoader.load();
    expect(result).toEqual(data);
  })()
});
