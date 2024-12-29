import leaderboard from "./leaderboard-data.jsx";

export default function Categories() {
    return (
        <>
            {leaderboard.map((option) => 
                <div key={option.id} className="flex gap-2">
                    {option.category.map((categories) => <p className="bg-black cursor-pointer font-semibold py-2 px-2.5 rounded-md">{categories}</p>)}
                </div>
            )}
        </>
    )
}