import gameSeries from "./series-data.jsx"

export default function SeriesList() {
    return (
        <>
            {gameSeries.map((serie) =>
                <div key={serie.id} className="cursor-pointer leading-loose max-w-56">
                    <div className="bg-[#252f37] flex flex-col gap-4 h-full justify-center p-6 rounded-xl">
                        <img className="max-h-24 object-contain" src={serie.logo} alt={serie.seriesName}/>
                        <div className="text-center">
                            <p className="font-bold text-[#199c77]">{serie.seriesName}</p>
                            <p className="font-bold text-[#d1d5dbcc] text-xs">N/A active players</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}