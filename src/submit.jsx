import Navigation from "./components/Navigation/nav";
import Avatar from "./assets/AvatarTest.jpg";
import LeaderboardRuns from "./components/Leaderboard/recent-runs-display.jsx";

export default function Submit() {
    return (
        <>
            <Navigation />

            <div className="flex justify-center px-4 mt-32">
                <div className="flex flex-col gap-6 max-w-5xl w-full">
                    <div className="flex gap-4 max-[1020px]:flex-col">
                        <div className="flex flex-col max-w-5xl w-full">
                            <div className="bg-[#2c453f99] flex flex-col flex-no gap-5 rounded">
                                <div>
                                    <div className="p-4">
                                        <p>SUBMIT RUN</p>
                                        <p>Categorization</p>
                                        <p>
                                            These values determine which leaderboards the run will be
                                            ranked on.
                                        </p>
                                    </div>

                                    <div className="flex flex-col mb-5 px-4 py-2">
                                        {/* 
                                        FIXME: Have a platforms list to filter out a list of
                                        specific platform
                                        */}
                                        <h3>Category <span>*</span></h3>
                                        <select className="options w-full">
                                            <option value="120 Star">120 Star</option>
                                        </select>
                                    </div>
                                    <hr className="opacity-15"/>
                                </div>

                                <div>
                                    <div className="p-4">
                                        <p>Players</p>
                                        <p>
                                            Which player took part in this run?
                                        </p>
                                    </div>

                                    <div className="flex flex-col mb-5 px-4 py-2">
                                        <p>Player 1 <span>*</span></p>
                                        <div className="options flex items-center gap-3 px-3 py-3.5 w-full">
                                            <img className="rounded-full h-8 w-8" src={Avatar} alt="" />
                                            <p>Saxophone_guy123</p>
                                        </div>
                                    </div>
                                    <hr className="opacity-15"/>
                                </div>

                                <div>
                                    <div className="p-4">
                                        <p>Run time</p>
                                        <p>
                                            This time determines the placement of the run on the
                                            leaderboards. For the selected category, shorter times
                                            are considered better.
                                        </p>
                                    </div>

                                    <div className="flex flex-col mb-5 px-4 py-2">
                                        
                                        <p>Time <span>*</span></p>
                                        <form action="">
                                            <div className="flex focus:border-8">
                                                <div className="relative">
                                                    <input className="bg-black text-right px-3.5 w-24 focus:outline-none" type="text" maxLength={3}/>
                                                    <div className="absolute top-0 right-0">h</div>
                                                </div>

                                                <div className="relative">
                                                    <input className="bg-black text-right px-4 w-24 focus:outline-none" type="text" maxLength={3}/>
                                                    <div className="absolute top-0 right-0">m</div>
                                                </div>

                                                <div className="relative">
                                                    <input className="bg-black text-right px-3.5 w-24 focus:outline-none" type="text" maxLength={3}/>
                                                    <div className="absolute top-0 right-0">s</div>
                                                </div>

                                                <div className="relative">
                                                    <input className="bg-black text-right px-6 w-24 focus:outline-none" type="text" maxLength={3}/>
                                                    <div className="absolute top-0 right-0">ms</div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <hr className="opacity-15"/>
                                </div>
                            </div>
                        </div>

                        <LeaderboardRuns/>
                    </div>
                </div>
            </div>
        </>
    )
}