import Navigation from "./components/Navigation/nav";
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
                                        <h3>Platform</h3>
                                        <select className="options w-full">
                                            <option value="120 Star">120 Star</option>
                                        </select>
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