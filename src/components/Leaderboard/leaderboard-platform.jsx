import leaderboard from "./leaderboard-data.jsx";

export default function PlatformsList() {
    return (
        <>
            {leaderboard.map((option) => 
            <div className="flex flex-col gap-1.5">
            <div>
                <p className="text-sm font-semibold text-[#d1d5dbcc]">Platform</p>
            </div>

            <div className="flex -mx-0.5">
                <div key={option.id} className="flex">
                        {option.platforms.map((platform) => <p className="bg-black border border-gray-700 cursor-pointer font-semibold py-1.5 px-2.5 first:rounded-l-lg last:rounded-r-lg">
                            {platform}
                        </p>)}
                    </div>
                </div>
            </div>
            )}
        </>
    )
}