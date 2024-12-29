import leaderboard from "./leaderboard-data.jsx";

export default function LeaderboardList() {
    let placement = 1;

    return (
        <>
            {leaderboard.map((leaderboards) => 
                <div key={leaderboards.id} className="max-[628px]:min-w-max">
                    <div className="bg-[#1e242a] rounded-md">
                        <table className="text-center w-full">
                            <thead className="h-12">
                                <tr>
                                    <th>#</th>
                                    <th>
                                        <div className="flex">Player</div>
                                    </th>
                                    <th>Time</th>
                                    <th>Date</th>
                                    <th>Platform</th>
                                    <th>Verified</th>
                                </tr>
                            </thead>

                            <tbody>
                            {leaderboards.leaderboardTimes.map((time) => 
                                <tr className="cursor-pointer odd:bg-[#181d22] even:bg-[#252f37] hover:bg-[#ffffff1a]"> 
                                    <td className="py-1.5">{placement++}</td>
                                    <td>
                                        <div className="flex font-semibold text-sm">{time.player}</div>
                                    </td>
                                    <td>
                                        <div className="flex items-center justify-center gap-2">
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="18" height="18" fill="none">
                                                    <path d="M16 3C9.383 3 4 7.477 4 13c0 2.803 1.437 5.305 3.78 7.135a12.354 12.354 0 0 1-1.446 3.653c-.307.524-.007 1.222.585 1.213 1.858-.026 4.04-.473 5.895-1.17C14.477 25.394 15.223 25.5 16 25.5c6.617 0 12-4.477 12-10.5S22.617 3 16 3z" fill="#ffffff" stroke="#000" stroke-width="2" />
                                                </svg>
                                            </span>
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