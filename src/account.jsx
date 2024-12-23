import Navigation from "./components/Navigation/nav.jsx";
import RunsList from "./components/Account/runs-list-display.jsx";
import Avatar from "./assets/AvatarTest.jpg";
import "./index.css";

export default function Account() {
    return (
        <>
            <Navigation />
            <div className="flex flex-col items-center gap-4 mt-20">
                <div className="bg-[#252f37] flex items-center gap-4 rounded-2xl p-4">
                    <div>
                        <img className="rounded-full h-20 w-20" src={Avatar} alt="User-picture"/>
                    </div>

                    <div className="flex flex-col">
                        <h1 className="text-xl font-bold">Saxophone_Guy123</h1>
                        <p>He/him</p>

                        <div className="flex gap-5">
                            <div className="flex items-center gap-1">
                                <svg className="rounded-md" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="20" height="20">
                                    <rect width="300" height="200" fill="white" />
                                    <circle cx="150" cy="100" r="60" fill="red" />
                                </svg>
                                <p>Japan</p>
                            </div>
                            
                            <div>
                                <button className="cursor-pointer font-bold text-[#199c77]">
                                    Settings
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-8">
                    <div>
                        <div className="bg-[#252f37] flex gap-2 rounded-2xl p-4">
                            <div>
                                <img className="h-24 object-contain rounded-2xl" src="https://cdn2.steamgriddb.com/grid/9e925dc2d11970c33393990e93664e9d.png" />
                            </div>
                            
                            <div>
                                <h3>Super Mario Bros.</h3>
                                <div className="flex">
                                    <div>
                                        <p>Any%</p>
                                        <p>NTSC</p>
                                    </div>
                                    <div>
                                        <p>415th</p>
                                        <p>4m 59s 973ms</p>
                                    </div>
                                    <div>
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
                                        <p>Emu</p>
                                        <p>2 months ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div></div>
                        <div></div>
                    </div>

                    <div className="bg-[#252f37] rounded-2xl p-4">
                        <h3 className="font-bold">GAMES RUN</h3>
                        <RunsList />
                    </div>
                </div>
            </div>
        </>
    )
}