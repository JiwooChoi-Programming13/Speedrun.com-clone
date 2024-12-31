import leaderboard from "../Leaderboard/leaderboard-data";

export default function PlatformList() {
    return (
        <>
            {leaderboard.map((platform) => 
                <div>
                    <p>Platform <span>*</span></p>
                    <select className="options w-full">
                        {platform.platforms.map((list) => <option value={list}>{list}</option>)}
                    </select>
                </div>
            )}
        </>
    )
}