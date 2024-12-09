export const sortGamesByActivePlayers = (games) => {
  const gamesClone = [...games];
  return gamesClone.sort((a, b) => b.activePlayers - a.activePlayers);
}
