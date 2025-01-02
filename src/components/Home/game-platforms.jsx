import platforms from "./platforms-data.jsx";

export default function Platform() {
    return (
        <>
            <div>
                <h3>Platform</h3>
                <select className="options">
                    <option value="Any Platform">Any Platform</option>
                {platforms.map((platform) => 
                    <option key={platform.id} value={platform.name}>{platform.name}</option>
                )}
                </select>
            </div>
        </>
    )
}