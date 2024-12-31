export default function TimeForm({ time, padding = "3.5" }) {
    return (
        <>
            <div className="relative">
                <input className={"pr-" + padding} id="time-input" type="text" maxLength={3}/>
                <div className="absolute top-0 right-0">{time}</div>
            </div>
        </>
    )
}