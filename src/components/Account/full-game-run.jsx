import runs from "./runs-data.jsx";

export default function FullGameRun() {
    return (
        <>
            {runs.map((run) =>
            <div key={run.id} className="w-full">
                <div className="flex flex-col gap-4 max-[730px]:flex-col max-[730px]:gap-0">
                    <div className="flex items-center gap-2">
                        <img className="h-24 object-contain rounded-md w-16 max-[730px]:w-10" src={run.image} />
                        <div>
                            <p className="full-game-text font-bold max-[730px]:text-sm">{run.name}</p>
                            <p className="full-game-text font-bold">Console: {run.console}</p>
                            <p className="full-game-text font-bold">Released: {run.releaseYear}</p>
                        </div>
                    </div>

                    <div className="max-w-xl w-screen max-[1068px]:max-w-full">
                        <div className="bg-[#1d2125] border flex justify-between gap-6 px-3 py-2 rounded max-[730px]:flex-col max-[730px]:gap-2">
                            <div>
                                <p className="full-game-text text-[#199C77]">{run.category}</p>
                                <p className="full-game-text">{run.region}</p>
                            </div>
                            
                            <div className="flex gap-4">
                                <div>
                                    <p className="full-game-text font-bold">{run.placement}</p>
                                    <p className="full-game-text">{run.runMinutes}m {run.runSeconds}s {run.runMilliseconds && `${run.runMilliseconds}ms`}</p>
                                </div>

                                <div className="relative">
                                    <div className="flex gap-1">
                                        <svg className="rounded-lg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190 100" width="24" height="24">

                                            <rect width="190" height="7.7" fill="#B22234"/>
                                            <rect y="15.4" width="190" height="7.7" fill="#B22234"/>
                                            <rect y="31.1" width="190" height="7.7" fill="#B22234"/>
                                            <rect y="46.8" width="190" height="7.7" fill="#B22234"/>
                                            <rect y="62.5" width="190" height="7.7" fill="#B22234"/>
                                            <rect y="78.2" width="190" height="7.7" fill="#B22234"/>
                                            <rect y="93.9" width="190" height="7.7" fill="#B22234"/>
                                            
                                            <rect y="7.7" width="190" height="7.7" fill="#ffffff"/>
                                            <rect y="23.4" width="190" height="7.7" fill="#ffffff"/>
                                            <rect y="39.1" width="190" height="7.7" fill="#ffffff"/>
                                            <rect y="54.8" width="190" height="7.7" fill="#ffffff"/>
                                            <rect y="70.5" width="190" height="7.7" fill="#ffffff"/>
                                            <rect y="86.2" width="190" height="7.7" fill="#ffffff"/>
                                            
                                            <rect width="76" height="53.8" fill="#3C3B6E"/>
                                            
                                            <g fill="#ffffff">
                                                <circle cx="6" cy="4.6" r="1.5"/>
                                                <circle cx="12" cy="4.6" r="1.5"/>
                                                <circle cx="18" cy="4.6" r="1.5"/>
                                                <circle cx="24" cy="4.6" r="1.5"/>
                                                <circle cx="30" cy="4.6" r="1.5"/>
                                                <circle cx="36" cy="4.6" r="1.5"/>
                                            </g>

                                            <g fill="#ffffff">
                                                <circle cx="6" cy="9.2" r="1.5"/>
                                                <circle cx="12" cy="9.2" r="1.5"/>
                                                <circle cx="18" cy="9.2" r="1.5"/>
                                                <circle cx="24" cy="9.2" r="1.5"/>
                                                <circle cx="30" cy="9.2" r="1.5"/>
                                            </g>

                                            <g fill="#ffffff">
                                                <circle cx="6" cy="13.8" r="1.5"/>
                                                <circle cx="12" cy="13.8" r="1.5"/>
                                                <circle cx="18" cy="13.8" r="1.5"/>
                                                <circle cx="24" cy="13.8" r="1.5"/>
                                                <circle cx="30" cy="13.8" r="1.5"/>
                                                <circle cx="36" cy="13.8" r="1.5"/>
                                            </g>

                                            <g fill="#ffffff">
                                                <circle cx="6" cy="18.4" r="1.5"/>
                                                <circle cx="12" cy="18.4" r="1.5"/>
                                                <circle cx="18" cy="18.4" r="1.5"/>
                                                <circle cx="24" cy="18.4" r="1.5"/>
                                                <circle cx="30" cy="18.4" r="1.5"/>
                                            </g>

                                            <g fill="#ffffff">
                                                <circle cx="6" cy="23" r="1.5"/>
                                                <circle cx="12" cy="23" r="1.5"/>
                                                <circle cx="18" cy="23" r="1.5"/>
                                                <circle cx="24" cy="23" r="1.5"/>
                                                <circle cx="30" cy="23" r="1.5"/>
                                                <circle cx="36" cy="23" r="1.5"/>
                                            </g>

                                            <g fill="#ffffff">
                                                <circle cx="6" cy="27.6" r="1.5"/>
                                                <circle cx="12" cy="27.6" r="1.5"/>
                                                <circle cx="18" cy="27.6" r="1.5"/>
                                                <circle cx="24" cy="27.6" r="1.5"/>
                                                <circle cx="30" cy="27.6" r="1.5"/>
                                            </g>
                                        </svg>
                                        <p className="full-game-text">{run.console}</p>
                                        {run.emulator === true && <p className="full-game-text absolute text-xs left-16 -top-1">EMU</p>}
                                    </div>
                                    <p className="full-game-text">2 months ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </>
    )
}