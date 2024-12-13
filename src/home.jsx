import Navigation from "./components/Navigation/nav.jsx";
import Random from "./assets/Random.png";
import GamesList from "./components/Game-data/games-list-display.jsx";
import RecentGamesList from "./components/Game-data/recent-games-list.jsx";
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
                            {/* 
                            FIXME: Have a platforms list to filter out a list of
                            specific platform
                            */}
                            <h3>Platform</h3>
                            <select className="options">
                                <option value="Any platform">Any platform</option>
                            </select>
                        </div>
                        <div className="list">
                            {/* 
                            FIXME: Have a sorting list to sort out a list of
                            specific categories
                            */}
                            <h3>Sort by</h3>
                            <select className="options">
                                <option value="Most active players">
                                    Most active players
                                </option>
                            </select>
                        </div>
                        <div className="game-select">
                            {/* 
                            FIXME: Have a random game selection where you can choose
                            a random game.
                            */}
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
                        {/* 
                        FIXME: Make this page scroll to limit the games that can be
                        shown on each page.
                        */}
                        <div className="pages-content">
                            <span className="arrows">&#8676;</span>
                            <p>1</p>
                            <p>2</p>
                            <p>3</p>
                            <p>4</p>
                            <p>5</p>
                            <p style={{cursor: "default"}}>...</p>
                            <p>481</p>
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