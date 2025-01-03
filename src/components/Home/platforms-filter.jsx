import { useState } from "react";
import Platform from "./game-platforms.jsx";
import GamesList from "./games-list-display.jsx";
import games from "./games-data.jsx";

export function PlatformFilter() {
    const [platforms, setPlatforms] = useState("Any platform");
    
    const handlePlatform = (platform) => {
        setPlatforms(platform);
    }

    const filteredGames = platforms === "Any platform"
    ? games
    : games.filter((game) => 
        game.platform === platforms || game.otherPlatforms.includes(platforms)
    )

    return (
        <div>
            <Platform>
                <GamesList></GamesList>
            </Platform>
        </div>
    )
}