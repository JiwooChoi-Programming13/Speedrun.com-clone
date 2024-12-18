import games from "./games-data.jsx";
import { SortGames } from "./sorting.jsx";

export default function RecentGamesList() {
    const recent = games.filter((game) => game.releaseYear >= 2024);
    const players = SortGames(recent);

    return (
        <>
            {players.map((game) => 
            <div key={game.id} className="cursor-pointer flex items-center justify-between p-3.5 even:bg-[#272033] last:hover:rounded-b-lg hover:bg-[#716a7d66]">
                <div className="flex items-center gap-1.5">
                    <img className="h-12 object-contain w-12" src={game.image} alt={game.name} />
                    <div>
                        <h4 className="text-[#49b697] text-sm w-52">{game.name}</h4>
                        <p className="release-date">Released {game.releaseYear}-{game.releaseMonth}-{game.releaseDay}</p>
                    </div>
                </div>

                <div className="text-[#49b697] text-center">
                    <p>{game.activePlayers}</p>
                    <p className="players">Players</p>
                </div>
            </div>
        )}
    </>
    )
}