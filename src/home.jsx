import Navigation from "./components/navigation/nav.jsx";
import Random from "./assets/Random.png";
import GamesList from "./components/game-data/games-list-display.jsx";
import RecentGamesList from "./components/game-data/recent-games-list.jsx";
import "./games-list.css";
import "./recent-games.css";

export default function Home() {

    return (
        <>
            <Navigation />
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
                        <div className="game-select">
                            <button className="random-game-button">
                                Random game
                                <img src={Random} alt="Select random game" />
                            </button>
                        </div>
                    </div>
                    <div className="games-list">
                        <GamesList />
                    </div>
                </div>

                <div className="recent-games-container">
                    <div className="recent-games-content">
                        <h4 className="recent-games-category">POPULAR NEW GAMES</h4>

                        
                        <div className="recent-games-grid">
                            <RecentGamesList />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}