import { useState } from "react";
import Platform from "./game-platforms.jsx";
import GamesList from "./games-list-display.jsx";
import games from "./games-data.jsx";

export function PlatformProvider() {
    const [platform, setPlatform] = useState("Any platform");

    const filteredGames =
    platform === "Any platform"
    ? games : games.filter(
        (game) => game.platform === platform ||
        game.otherPlatforms.includes(platform)
    );

    return (
        <platformContext.Provider value={{ platform, setPlatform, filteredGames }}>
            {children}
        </platformContext.Provider>
    )
}