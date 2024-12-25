import gameSeries from "./series-data.jsx"

export default function SeriesList() {
    return (
        <>
            {gameSeries.map((serie) =>
                <div key={serie.id} className="cursor-pointer max-w-52 max-[1130px]:max-w-none leading-loose">
                    <div className="bg-[#252f37] max-w-fit px-8 py-4 rounded-xl">
                        <img src={serie.logo} alt={serie.seriesName}/>
                        <div className="flex flex-col items-center">
                            <p className="font-bold text-[#199c77]">{serie.seriesName}</p>
                            <p className="font-bold text-[#d1d5dbcc] text-xs">N/A active players</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}