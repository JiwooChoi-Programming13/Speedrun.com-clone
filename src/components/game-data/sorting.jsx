export const sortGames = (games) => {
    const GamesList = [...games];
    return GamesList.sort((a, b) => b.activePlayers - a.activePlayers);
}