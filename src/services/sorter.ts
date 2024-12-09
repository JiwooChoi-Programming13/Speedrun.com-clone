import Game from "../models/game";

export const sortGamesByActivePlayers = (games: Game[]): Game[] => {
  const gamesClone = [...games];
  return gamesClone.sort((a, b) => b.activePlayers - a.activePlayers);
}
