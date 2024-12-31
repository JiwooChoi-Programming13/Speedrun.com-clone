import Navigation from "./components/Navigation/nav";
import CategoriesList from "./components/Leaderboard/leaderboard-category-display.jsx";
import PlatformsList from "./components/Leaderboard/leaderboard-platform.jsx";
import LeaderboardList from "./components/Leaderboard/leaderboard-display.jsx";
import LeaderboardRuns from "./components/Leaderboard/recent-runs-display.jsx";
import { Link } from "react-router-dom";
import "./index.css"

export default function Leaderboard() {
    return (
        <>
            <Navigation />

            <div className="flex justify-center px-4 mt-32">
                <div className="flex flex-col gap-6 max-w-5xl w-full">
                    <div className="bg-[#252f37] rounded-md">
                        <div className="flex items-center gap-4 px-6 py-4">
                            <img className="max-h-36 rounded-md" src="https://cdn2.steamgriddb.com/grid/f293653ffa5c0e53453463a82401dbec.png" alt="Super Mario 64" />
                            
                            <div className="flex flex-col gap-2">
                                <div className="flex font-bold gap-1 items-center">
                                    <p className="text-[#58d68d] text-2xl">Super Mario 64</p>
                                    <p className="text-xl">(1996)</p>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <p>Super Mario Series</p>

                                    <div className="flex gap-2">
                                        <span className="game-platform">N64</span>
                                        <span className="game-platform">WiiVC</span>
                                        <span className="game-platform">WiiUVC</span>
                                        <span className="game-platform">Switch</span>
                                    </div>

                                    <div className="flex gap-2">
                                        <p className="bg-[#ffffff1a] cursor-pointer text-sm opacity-80 py-1 px-2 rounded">Discord</p>
                                        <p className="bg-[#ffffff1a] cursor-pointer text-sm opacity-80 py-1 px-2 rounded">Website</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 max-[1020px]:flex-col">
                        <div className="flex flex-col max-w-5xl w-full">
                            <div className="bg-[#2c453f99] flex flex-col flex-no gap-3 p-2 rounded">
                                <CategoriesList />
                                <PlatformsList />

                                <div className="flex flex-col gap-1.5">
                                    <div>
                                        <p className="text-sm font-semibold text-[#d1d5dbcc]">Other</p>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <p className="bg-black cursor-pointer font-bold px-2.5 py-1 text-[#d1d5dbcc]">Show rules</p>
                                        <Link to="/submit" className="bg-[#199C77] cursor-pointer font-semibold px-4 py-1.5 rounded text-black">Submit run</Link>
                                    </div>
                                </div>
                            </div>
                            
                        <LeaderboardList />
                        </div>

                        <LeaderboardRuns/>
                    </div>
                </div>
            </div>
        </>
    )
}