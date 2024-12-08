import Navigation from "./components/navigation/nav.jsx";
import Random from "./assets/Random.png";
import GamesList from "./components/game-data/games-list-display.jsx";
import RecentGamesList from "./components/game-data/recent-games-list.jsx";
import "./games-list.css";
import "./recent-games.css";
import "./pages.css";

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

                    <div className="pages-container">
                        <div className="pages-content">
                            <span className="arrows">&#8676;</span>
                            <span>1</span>
                            <span>2</span>
                            <span>3</span>
                            <span>4</span>
                            <span>5</span>
                            <span style={{cursor: "default"}}>...</span>
                            <span>481</span>
                            <span className="arrows">&#8677;</span>
                        </div>
                    </div>
                </div>

                <div className="recent-games-container">
                    <h4 className="recent-games-category">POPULAR NEW GAMES</h4>
                    <RecentGamesList />
                </div>
            </div>
        </>
    )
}