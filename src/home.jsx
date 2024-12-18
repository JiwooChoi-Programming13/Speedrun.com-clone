import Navigation from "./components/Navigation/nav.jsx";
import Random from "./assets/Random.png";
import GamesList from "./components/Game-data/games-list-display.jsx";
import RecentGamesList from "./components/Game-data/recent-games-list.jsx";
import "./index.css"
// import "./CSS/games-list.css";
// import "./CSS/recent-games.css";
// import "./CSS/pages.css";
// import "./CSS/media-queries/home-media-queries.css"

export default function Home() {

    return (
        <>
            <Navigation />
            <div className="flex justify-center gap-4 my-40">
                <div className="bg-[#1b1429] rounded-2xl px-4 py-3 pb-4">
                    <div className="flex items-center justify-between gap-2">
                        <div className="flex gap-4 mb-5">
                            <div>
                                {/* 
                                FIXME: Have a platforms list to filter out a list of
                                specific platform
                                */}
                                <h3>Platform</h3>
                                <select className="options">
                                    <option value="Any platform">Any platform</option>
                                </select>
                            </div>
                            <div>
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
                        </div>
                            {/* 
                            FIXME: Have a random game selection where you can choose
                            a random game.
                            */}
                            <button className="bg-[#199c77] cursor-pointer flex font-bold items-center min-w-max rounded-sm p-2 hover:bg-[#1ebb8f]">
                                Random game
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 64 64"
                                    width="20"
                                    height="20"
                                    fill="none"
                                    >
                                    {/* Dice Background */}
                                    <rect x="8" y="8" width="48" height="48" rx="8" fill="#F2F2F2" stroke="#333" strokeWidth="2" />

                                    {/* Random Dots */}
                                    <circle cx="16" cy="16" r="4" fill="#333" />
                                    <circle cx="32" cy="32" r="4" fill="#333" />
                                    <circle cx="48" cy="48" r="4" fill="#333" />
                                    <circle cx="48" cy="16" r="4" fill="#333" />
                                    <circle cx="16" cy="48" r="4" fill="#333" />
                                </svg>
                            </button>
                    </div>
                    <div className="gap-4 grid grid-cols-5">
                        <GamesList />
                    </div>

                    <div className="flex justify-center mt-2.5">
                        {/* 
                        FIXME: Make this page scroll to limit the games that can be
                        shown on each page.
                        */}
                        <div className="bg-black rounded-lg flex gap-5 p-2">
                            <span className="cursor-pointer">&#8676;</span>
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

                <div className="bg-[#1b1429] self-start rounded-2xl min-w-96">
                    <h4 className="font-bold p-3.5">POPULAR NEW GAMES</h4>
                    <RecentGamesList />
                </div>
            </div>
        </>
    )
}