import games from "./games-data.jsx";
import { SortGames } from "./sorting.jsx";

export default function GamesList() {
    const sorting = SortGames(games);

    return (
        <>
        {sorting.map((game) =>
                <div key={game.id} className="cursor-pointer max-w-32 overflow-x-hidden">
                <div className="game-content">
                    <img className="rounded-xl" src={game.image} alt={game.name}/>
                    <div className="absolute bg-black rounded text-xs p-1 right-1 top-1">{game.releaseYear}</div>
                    <div className="absolute bottom-2 left-1 rounded-sm text-xs font-bold z-10">{game.name}</div>
                </div>
                <div className="bg-[#252f37] flex flex-col gap-1 -mt-1 p-2 rounded-b-md rounded-r-md">
                    <p className="text-[#d1d5dbcc] text-xs">{game.activePlayers} active players</p>
                    <div className="flex gap-2 flex-wrap max-[264px]:hidden">
                        <p className="game-platform">{game.platform}</p>

                        {game.otherPlatforms.length > 1 ? (
                            <div className="relative">
                                <div className="game-platform">
                                    +{game.otherPlatforms.length}
                                    {game.otherPlatforms.length > 3 ? (
                                        <p className="game-other-platforms-long">{game.otherPlatforms.join(' ')}</p>
                                    ) : (
                                        <p className="game-other-platforms-short">{game.otherPlatforms.join(' ')}</p>
                                    )}
                                </div>
                            </div>
                        ) : game.otherPlatforms.length === 1 ? (
                            <p className="game-platform">{game.otherPlatforms}</p>
                        ) : null}
                    </div>
                </div>
            </div>
            )
        }
        </>
    )
}