import leaderboard from "./leaderboard-data.jsx";

export default function CategoriesList() {
    return (
        <>
            {leaderboard.map((option) => 
            <div className="flex flex-col gap-1.5">
                <div>
                    <p className="text-sm font-semibold text-[#d1d5dbcc]">Category</p>
                </div>
                
                <div key={option.id} className="flex gap-2">
                    {option.categories.map((category) => <p className="bg-black cursor-pointer font-semibold py-2 px-2.5 rounded-md">{category}</p>)}
                </div>
            </div>
            )}
        </>
    )
}