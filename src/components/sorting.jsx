export const sortGames = (games, category = undefined) => {
    const GamesList = [...games];
    return GamesList.sort(category);
}