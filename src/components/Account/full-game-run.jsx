import runs from "./runs-data.jsx";

export default function FullGameRun() {
    return (
        <>
            {runs.map((run) =>
            <div key={run.id} className="flex gap-4 max-w-screen-sm">
                <div>
                    <img className="h-24 object-contain rounded-md w-16" src={run.image} />
                </div>
                
                <div className="max-w-lg w-full">
                    <p className="font-bold text-base">{run.name}</p>

                    <div className="border-white border flex gap-4 justify-between px-3 py-2">
                        <div className="flex justify-center flex-col gap-1">
                            <p>{run.category}</p>
                            <p>{run.region}</p>
                        </div>
                        
                        <div className="flex gap-4">
                            <div className="flex flex-col gap-1">
                                <p>{run.placement}</p>
                                <p className="flex gap-1">{run.runMinutes}m {run.runSeconds}s {run.runMilliseconds && `${run.runMilliseconds}ms`}</p>
                            </div>
                            <div className="flex flex-col gap-1 relative">
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
                                <p className="absolute font-bold text-sm left-7 -top-1">{run.emulator === true && <p>{run.emulator}</p>}</p>
                                <p>2 months ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </>
    )
}