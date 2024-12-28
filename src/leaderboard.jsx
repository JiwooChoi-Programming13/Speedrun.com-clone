import Navigation from "./components/Navigation/nav";
import Categories from "./components/Leaderboard/leaderboard-category-display.jsx";
import LeaderboardList from "./components/Leaderboard/leaderboard-display";
import "./index.css"

export default function Leaderboard() {
    return (
        <>
            <Navigation />

            <div className="flex justify-center mt-32">
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
                                        <p className="bg-[#ffffff1a] cursor-pointer text-sm opacity-80 p-1 px-2 rounded">Discord</p>
                                        <p className="bg-[#ffffff1a] cursor-pointer text-sm opacity-80 p-1 px-2 rounded">Website</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex flex-col gap-16 max-w-max w-full">
                            <div className="bg-[#20463bcc] flex flex-col gap-3 p-2 self-start rounded">
                                <div className="flex flex-col gap-1.5">
                                    <div>
                                        <p className="text-sm font-semibold text-[#d1d5dbcc]">Platform</p>
                                    </div>
                                    
                                    <div className="flex -mx-0.5">
                                        <p className="bg-black border border-gray-700 cursor-pointer font-semibold py-1.5 px-3 rounded-l-lg">N64</p>
                                        <p className="bg-black border border-gray-700 cursor-pointer font-semibold py-1.5 px-3">VC</p>
                                        <p className="bg-black border border-gray-700 cursor-pointer font-semibold py-1.5 px-3 rounded-r-lg">EMU</p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <div>
                                        <p className="text-sm font-semibold text-[#d1d5dbcc]">Category</p>
                                    </div>
                                    
                                    <Categories />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <div>
                                        <p className="text-sm font-semibold text-[#d1d5dbcc]">Other</p>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <p className="bg-black cursor-pointer font-bold px-2 py-1 text-[#d1d5dbcc]">Show rules</p>
                                        <p className="bg-[#199C77] cursor-pointer font-semibold px-4 py-1.5 rounded text-black">Submit run</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#20463bcc] rounded-2xl min-w-[22rem] max-[1010px]:w-full">
                                <h4 className="font-bold p-3.5">RECENT RUNS</h4>

                                <div className="cursor-pointer px-3 py-1 last:rounded-b-lg hover:bg-[#716a7d66]">
                                    <div className="flex items-center gap-2">
                                        <div className="flex flex-col gap-2">
                                            <div>
                                                <p className="font-semibold text-[#49b697]">120 Star</p>
                                            </div>
                                            <div>
                                                <p>N64 <span>(Yes)</span></p>
                                                <p>1st</p>
                                                <p>1h 35m 28s</p>
                                            </div>
                                        </div>
                                    

                                        <div>
                                            <p className="run-info">Released</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <LeaderboardList />
                    </div>
                </div>
            </div>
        </>
    )
}