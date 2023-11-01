let games = [
  {id: '1', title: 'Armored Core VI: Fires of Rubicon', platform: ['PC', 'PS5', 'Xbox']},
  {id: '2', title: 'Destiny 2: Lightfall', platform: ['PC', 'PS5', 'Xbox']},
  {id: '3', title: 'Elden Ring', platform: ['PC', 'PS5', 'Xbox']},
  {id: '4', title: 'Resident Evil 4 Remake', platform: ['PC', 'PS5', 'Xbox']},
  {id: '5', title: 'Armored Core VI: Fires of Rubicon', platform: ['PC', 'PS5', 'Xbox']},
  {id: '6', title: 'Path of Exile', platform: ['PC', 'PS5']},
]

let authors = [
  {id: '1', name: 'mario', verified: true},
  {id: '2', name: 'yoshi', verified: false},
  {id: '3', name: 'peach', verified: true},
]

let reviews = [
  {id: '1', rating: 9, content: 'Game of the Decade.', author_id: '1', game_id: '3'},
  {id: '2', rating: 10, content: 'TOTR will be goty this year.', author_id: '2', game_id: '1'},
  {id: '3', rating: 7, content: 'Game is good but too hard for me.', author_id: '3', game_id: '3'},
  {id: '4', rating: 5, content: 'Bad.', author_id: '2', game_id: '4'},
  {id: '5', rating: 10, content: 'Another hit from From Software.', author_id: '2', game_id: '5'},
  {id: '6', rating: 7, content: 'Better than last remake.', author_id: '1', game_id: '2'},
  {id: '7', rating: 10, content: 'This is a step up from the last game.', author_id: '3', game_id: '1'},
]

export default { games, authors, reviews }