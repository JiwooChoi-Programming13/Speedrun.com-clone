import leaderboard from "./leaderboard-data.jsx"

export default function LeaderboardRuns() {
    return (
        <>
        <div className="bg-[#20463bcc] rounded-2xl min-w-[22rem] max-[1010px]:w-full">
            <p className="font-bold p-3.5">RECENT RUNS</p>
                <div className="cursor-pointer px-3 py-2 last:rounded-b-lg hover:bg-[#716a7d66]">
                    {leaderboard.map((recent) =>
                        <>
                            {recent.leaderboardTimes.map((runs) => 
                                <div key={runs.player} className="flex flex-col gap-5">
                                    <div>
                                        <p className="font-semibold text-[#49b697]">{runs.category}</p>
                                    </div>

                                    <div className="flex items-center gap-12">
                                        <div>
                                            <p className="text-sm">
                                                {runs.platform}
                                                ({runs.verified === true ? <span>Yes</span> : <span>No</span>})
                                            </p>
                                            <p>1st</p>
                                            <p className="text-xs">{runs.hour}h {runs.minutes}m {runs.seconds}s</p>
                                        </div>
                                        <div className="text-sm">
                                            <p>{runs.player}</p>
                                            <p>{runs.date} ago</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </>
    )
}