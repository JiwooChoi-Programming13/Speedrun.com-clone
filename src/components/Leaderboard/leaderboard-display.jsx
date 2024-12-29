import leaderboard from "./leaderboard-data.jsx";

export default function LeaderboardList() {
    let placement = 1;

    return (
        <>
            {leaderboard.map((leaderboards) => 
                <div key={leaderboards.id} className="w-full">
                    <div className="bg-[#1e242a] rounded-md">
                        <table className="text-center w-full">
                            <thead className="h-12">
                                <tr>
                                    <th>#</th>
                                    <th>Player</th>
                                    <th>Time</th>
                                    <th>Date</th>
                                    <th>Platform</th>
                                    <th>Verified</th>
                                </tr>
                            </thead>

                            <tbody className="">
                            {leaderboards.leaderboardTimes.map((time) => 
                                <tr className="cursor-pointer odd:bg-[#181d22] even:bg-[#252f37] hover:bg-[#ffffff1a]"> 
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
                            </tbody>
                        </table>

                        <div className="bg-[#1e242a] flex items-center justify-between p-3.5 rounded-b-md max-[355px]:hidden">

                            <p>Showing 1 out of the {leaderboards.leaderboardTimes.length}</p>
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
                </div>
            )}
        </>
    )
}