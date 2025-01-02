import { useState } from "react";
import platforms from "./platforms-data.jsx";
import { platformContext } from "./platforms-context.jsx";

export default function Platform() {
    const [platform, setPlatform] = useState(platformContext);
    
    return (
        <>
            <div>
                <h3>Platform</h3>
                <select
                className="options"
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}>
                    <option value="Any Platform">Any Platform</option>
                {platforms.map((platform) => 
                    <option key={platform.id} value={platform.name}>{platform.name}</option>
                )}
                </select>
            </div>
        </>
    )
}