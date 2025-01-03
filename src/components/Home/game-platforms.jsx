import platforms from "./platforms-data.jsx";

export default function Platform({ onPlatformChange }) {
    const handleChange = (event) => {
        onPlatformChange(event.target.value);
    }
    
    return (
        <>
            <div>
                <h3>Platform</h3>
                <select
                className="options" onChange={handleChange}>
                    <option value="Any platform">Any Platform</option>
                    {platforms.map((platform) => 
                        <option key={platform.id} value={platform.name}>
                            {platform.name}
                        </option>
                    )}
                </select>
            </div>
        </>
    )
}