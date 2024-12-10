export const SortGames = (category) => {
    const GamesList = [...category];
    return GamesList.sort((a, b) => b.activePlayers - a.activePlayers);
}