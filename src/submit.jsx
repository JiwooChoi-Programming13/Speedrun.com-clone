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
                            <div className="bg-[#2c453f99] flex flex-col flex-no gap-3 p-2 rounded">
                                
                            </div>
                        </div>

                        <LeaderboardRuns/>
                    </div>
                </div>
            </div>
        </>
    )
}