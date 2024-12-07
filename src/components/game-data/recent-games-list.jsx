import games from "./games-data";

export default function RecentGamesList() {
    const recent = games.filter((game) => game.releaseYear >= "2024");

    return (
        <>
        {recent.map((game) => 
        <div key={game.id} className="recent-games-list">
        <div className="recent-game-details">
            <img className="recent-game-image" src={game.image} alt={game.name} />
            <div>
                <h4 className="recent-game-title">{game.name}</h4>
                <p className="release-date">Released {game.releaseYear}-{game.releaseMonth}-{game.releaseDay}</p>
            </div>
        </div>

        <div className="recent-active-players">
            <p>{game.activePlayers}</p>
            <p className="players">Players</p>
        </div>
    </div>
    )}
    </>
    )
}