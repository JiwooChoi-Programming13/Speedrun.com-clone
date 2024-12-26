import Navigation from "./components/Navigation/nav";
import "./index.css"

export default function Leaderboard() {
    return (
        <>
            <Navigation />

            <div className="flex justify-center mt-32">
                <div className="flex flex-col gap-6 max-w-4xl w-full">
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

                    <div className="bg-[#20463bcc] flex flex-col gap-3 p-2">
                        <div className="flex gap-3">
                            <p className="bg-black cursor-pointer font-semibold p-2 rounded-md">120 Star</p>
                            <p className="bg-black cursor-pointer font-semibold p-2 rounded-md">70 Star</p>
                            <p className="bg-black cursor-pointer font-semibold p-2 rounded-md">16 Star</p>
                            <p className="bg-black cursor-pointer font-semibold p-2 rounded-md">1 Star</p>
                            <p className="bg-black cursor-pointer font-semibold p-2 rounded-md">0 Star</p>
                        </div>

                        <div className="flex gap-2 items-center max-w-max">
                            <p className="bg-black cursor-pointer font-bold px-2 py-1 text-[#d1d5dbcc]">Show rules</p>
                            <p className="bg-[#199C77] cursor-pointer font-semibold px-4 py-1.5 rounded text-black">Submit run</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}