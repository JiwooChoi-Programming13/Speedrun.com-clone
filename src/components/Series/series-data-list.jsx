import gameSeries from "./series-data.jsx";

export default function SeriesList() {
    return (
        <>
            {gameSeries.map((serie) => {
                <div key={serie.id} className="cursor-pointer max-w-32 max-[1130px]:max-w-none">
                    <div className="game-content">
                        <img className="rounded-xl" src={serie.logo} alt={serie.name}/>
                        <p>{serie.name}</p>
                        <p className="text-[#d1d5dbcc] text-xs">active players</p>
                    </div>
                </div>
            })}
        </>
    )
}