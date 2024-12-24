export default function StatsGrid({ number = 0, text}) {
    return (
        <>
            <div className="grid-items">
                <h3 className="font-bold text-2xl">{number}</h3>
                <p className="text-[#d1d5dbcc]">{text}</p>
            </div>
        </>
    )
}