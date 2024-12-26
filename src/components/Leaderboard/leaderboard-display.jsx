import leaderboard from "./leaderboard-data.jsx";

export default function LeaderboardList() {
    let placement = 1;

    return (
        <>
            {leaderboard.map((leaderboards) => 
                <div key={leaderboards.id} className="w-full">
                    <div className="bg-[#252f37] py-4 rounded-md">
                        <table className="text-center w-full">
                            <tr>
                                <th>#</th>
                                <th>Player</th>
                                <th>Time</th>
                                <th>Date</th>
                                <th>Platform</th>
                                <th>Verified</th>
                            </tr>

                            {leaderboards.leaderboardTimes.map((time) => 
                            <tr className="odd:bg-[#181d22] even:bg-[#252f37]">
                                <td className="py-1.5">{placement++}</td>
                                <td>{time.player}</td>
                                <td>
                                    <div className="flex justify-center gap-2">
                                        <span>message</span>
                                        {time.hour}h {time.minutes}m {time.seconds}s
                                    </div>
                                </td>
                                <td>{time.date} ago</td>
                                <td>
                                    <div className="flex justify-center items-center gap-1">
                                        <svg className="rounded-md" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="20" height="20">
                                            <rect width="300" height="200" fill="white" />
                                            <circle cx="150" cy="100" r="60" fill="red" />
                                        </svg>
                                        {time.platform}
                                    </div>
                                </td>
                                <td>{time.verified === true ? <p>Yes</p> : <p>No</p>}</td>
                            </tr>
                            )}
                        </table>
                    </div>
                </div>
            )}
        </>
    )
}