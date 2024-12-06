import Navigation from "./components/navigation/nav.jsx"
import games from "./games-list.jsx"
import "./home.css"

export default function Home() {
    return (
        <>
            <Navigation/>
            <div className="container">
                <div className="games-list-container">
                    <div className="list-container">
                        <div className="list">
                            <h3>Platform</h3>
                            <select className="options">
                                <option value="Any platform">Any platform</option>
                            </select>
                        </div>
                        <div className="list">
                            <h3>Sort by</h3>
                            <select className="options">
                                <option value="Most active players">Most active players</option>
                            </select>
                        </div>
                    </div>
                    <div className="games-list">
                        {games.map((game) => {
                            return (
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
                                        <p className="game-platform">+3</p>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}