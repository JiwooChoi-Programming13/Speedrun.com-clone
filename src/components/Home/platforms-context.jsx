import { createContext, useState } from "react";
import games from "./games-data.jsx";

export const platformContext = createContext();

export function PlatformProvider({ children }) {
    const [platform, setPlatform] = useState("Any platform");

    const filterGames =
    platform === "Any platform"
    ? games : games.filter(
        (game) => game.platform === platform ||
        game.otherPlatforms.includes(platform)
    );

    return (
        <platformContext.Provider value={{ platform, setPlatform, filterGames }}>
            {children}
        </platformContext.Provider>
    )
}