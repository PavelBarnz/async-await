import GameSavingLoader from '../js/GameSavingLoader.js';


test('тест функции GameSavingLoader', () => {
  const result = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  };

  GameSavingLoader.load().then((response) => {
    expect(response).toEqual(result);
  });
});
