import { useState } from "react";
import platforms from "./platforms-data.jsx";

export function Platform() {
    const [platform, setPlatform] = useState("all");
    const [games, setGames] = useState(platforms);
}