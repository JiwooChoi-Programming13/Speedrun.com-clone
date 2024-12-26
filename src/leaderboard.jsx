import Navigation from "./components/Navigation/nav";
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
                        <div className="bg-[#20463bcc] flex flex-col gap-3 max-w-max w-full p-2 rounded">
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
                                <div className="flex gap-2">
                                    <p className="bg-black cursor-pointer font-semibold p-2 rounded-md">120 Star</p>
                                    <p className="bg-black cursor-pointer font-semibold p-2 rounded-md">70 Star</p>
                                    <p className="bg-black cursor-pointer font-semibold p-2 rounded-md">16 Star</p>
                                    <p className="bg-black cursor-pointer font-semibold p-2 rounded-md">1 Star</p>
                                    <p className="bg-black cursor-pointer font-semibold p-2 rounded-md">0 Star</p>
                                </div>
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

                        <div className="w-full">
                            <div className="bg-[#252f37] rounded-md p-4">
                                <table className="text-center w-full">
                                    <tr>
                                        <th>#</th>
                                        <th className="mr-auto">Player</th>
                                        <th>Time</th>
                                        <th>Date</th>
                                        <th>Platform</th>
                                        <th>Verified</th>
                                    </tr>

                                    <tr>
                                        <td>1</td>
                                        <td>Suigi</td>
                                        <td>
                                            <div className="flex justify-center gap-2">
                                                <span>message</span>
                                                1h 35m 28s
                                            </div>
                                        </td>
                                        <td>1 Month ago</td>
                                        <td>
                                            <div className="flex justify-center items-center gap-1">
                                                <svg className="rounded-md" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="20" height="20">
                                                    <rect width="300" height="200" fill="white" />
                                                    <circle cx="150" cy="100" r="60" fill="red" />
                                                </svg>
                                                N64
                                            </div>
                                        </td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Weegee</td>
                                        <div className="flex justify-center gap-2">
                                            <span>message</span>
                                            1h 36m 02s
                                        </div>
                                        <td>5 Months ago</td>
                                        <td>
                                            <div className="flex justify-center items-center gap-1">
                                                <svg className="rounded-md" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="20" height="20">
                                                    <rect width="300" height="200" fill="white" />
                                                    <circle cx="150" cy="100" r="60" fill="red" />
                                                </svg>
                                                N64
                                            </div>
                                        </td>
                                        <td>Yes</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>HorrorDoesSpeedruns</td>
                                        <div className="flex justify-center gap-2">
                                            <span>message</span>
                                            1h 39m 31s
                                        </div>
                                        <td>7 days ago</td>
                                        <td>
                                            <div className="flex justify-center items-center gap-1">
                                                <svg className="rounded-md" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="20" height="20">
                                                    <rect width="300" height="200" fill="white" />
                                                    <circle cx="150" cy="100" r="60" fill="red" />
                                                </svg>
                                                N64
                                            </div>
                                        </td>
                                        <td>Yes</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}