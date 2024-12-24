import Navigation from "./components/Navigation/nav.jsx";
import RunsList from "./components/Account/runs-list-display.jsx";
import FullGameRun from "./components/Account/full-game-run.jsx";
import { Link } from "react-router-dom";
import Avatar from "./assets/AvatarTest.jpg";
import "./index.css";

export default function Account() {
    return (
        <>
            <Navigation />
            <div className="flex flex-col items-center gap-4 my-20 px-2">
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
                                <Link to="/settings" className="cursor-pointr font-bold text-[#199c77]">
                                    Settings
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-10 max-[1068px]:flex-col max-[1068px]:w-full">
                    <div>
                        <div className="bg-[#252f37] flex flex-col gap-6 rounded-2xl p-4">
                            <FullGameRun />
                            <div className="flex justify-center mt-2.5 max-[730px]:hidden">
                                {/* 
                                FIXME: Make this page scroll to limit the games that can be
                                shown on each page.
                                */}
                                <div className="bg-black rounded-lg flex gap-5 p-2">
                                    <span className="cursor-pointer">&#8676;</span>
                                    <p>1</p>
                                    <p>2</p>
                                    <p>3</p>
                                    <p>4</p>
                                    <p>5</p>
                                    <p style={{cursor: "default"}}>...</p>
                                    <p>481</p>
                                    <span className="arrows">&#8677;</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <div className="bg-[#252f37] flex flex-col gap-4 rounded-2xl p-4">
                            <div>
                                <p className="font-bold text-lg">About Saxophone_Guy123</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p>Speedrunning is my dream</p>
                                <div>
                                    <p className="font-bold text-[#d1d5dbcc]">Runs</p>
                                    <p className="font-bold">87</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-[#252f37] rounded-2xl min-w-96 max-[1010px]:w-full">
                            <h3 className="font-bold p-3">GAMES RUN</h3>
                            <RunsList />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}