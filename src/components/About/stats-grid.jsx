export default function StatsGrid({ number = 0, text}) {
    return (
        <>
            <div className="grid-content">
                <h3 className="stats">{number}</h3>
                <p className="stats-text">{text}</p>
            </div>
        </>
    )
}