import { sortGamesByActivePlayers } from "../sorter.mjs";

describe('services: sorter should', () => {
  const game1 = {
    id: 25,
    name: "Celeste",
    image: "https://celeste.com",
    platform: "PC",
    otherPlatforms: [],
    releaseYear: 2018,
    activePlayers: 581,
  };
  const game2 = {
    id: 1,
    name: "Mario Kart",
    image: "https://mario.com",
    platform: "N64",
    otherPlatforms: [],
    releaseYear: 2000,
    activePlayers: 9999,
  };

  it('sort games', () => {
    const testCase = [game1, game2];

    const sortedGames = sortGamesByActivePlayers(testCase);

    expect(sortedGames).toEqual([game2, game1]);
  });
});
