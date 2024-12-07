import games from "./games-data.jsx";

export default function GamesList() {
    return (
        <>
        {games.map((game) =>
                <div key={game.id} className="game">
                <div className="game-content">
                    <img className="game-image" src={game.image} alt={game.name}/>
                    <div className="release-year">{game.releaseYear}</div>
                    <div className="game-title">{game.name}</div>
                </div>
                <div className="details-content">
                    <p className="active-players">{game.activePlayers} active players</p>
                    <div className="game-platform-container">
                        <p className="game-platform">{game.platform}</p>

                        {game.otherPlatforms.length > 1 ? (
                        <p className="game-platform">+{game.otherPlatforms.length}</p>
                        ) : null}

                        {game.otherPlatforms.length === 1 ? (
                            <p className="game-platform">{game.otherPlatforms}</p>
                        ) : null}
                    </div>
                </div>
            </div>
            )
        }
        </>
    )
}