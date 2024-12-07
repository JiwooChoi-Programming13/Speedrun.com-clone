import Navigation from "./components/navigation/nav.jsx";
import Random from "./assets/Random.png";
import GamesList from "./components/game-data/games-list-display.jsx";
import GameTest from "./assets/GameTest.png"
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
                    <div>
                        <div>
                            <h4>POPULAR NEW GAMES</h4>
                        </div>
                        <div>
                            <div>
                                <div>
                                    <img className="recent-game-image" src={GameTest} alt="" />
                                </div>

                                <div>
                                    <h4>Call of Duty: Black Ops 6 Zombies</h4>
                                    <p>Released 2024-10-25</p>
                                </div>

                                <div>
                                    <p>369</p>
                                    <p>Players</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}