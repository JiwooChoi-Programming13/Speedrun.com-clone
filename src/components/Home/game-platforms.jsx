import { useState, useEffect } from "react";
import platforms from "./platforms-data.jsx";

export default function Platform() {
    const [console, setConsole] = useState("Any Platform");

    useEffect(() => {
        platforms.filter(() => setConsole)
    }, [console])
    
    return (
        <>
            <div>
                <h3>Platform</h3>
                <select className="options">
                {platforms.map((platform) => 
                    <option key={platform.id} onChange={setConsole} value={platform.name}>{platform.name}</option>
                )}
                </select>
            </div>
        </>
    )
}