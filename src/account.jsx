import Navigation from "./components/Navigation/nav.jsx";
import RunsList from "./components/Account/runs-list-display.jsx";
import Avatar from "./assets/AvatarTest.jpg";
import "./index.css";

export default function Account() {
    return (
        <>
            <Navigation />
            <div className="flex justify-center gap-3 mt-20">
                <div className="bg-[#252f37] rounded-2xl p-4 flex items-center gap-6">
                    <div>
                        <img className="rounded-full h-20 w-20" src={Avatar} alt="User-picture"/>
                    </div>

                    <div>
                        <div>
                            <h1 className="text-xl font-bold">Saxophone_Guy123</h1>
                        </div>

                        <div className="flex flex-col">
                            <div>
                                <p>He/him</p>
                            </div>

                            <div className="flex items-center gap-1.5">
                                <svg className="rounded-md" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="20" height="20">
                                    <rect width="300" height="200" fill="white" />
                                    <circle cx="150" cy="100" r="60" fill="red" />
                                </svg>
                                <p>Japan</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <button className="bg-[#199c77] cursor-pointer p-2 rounded-md font-bold">
                            Settings
                        </button>
                    </div>
                </div>

                <div className="bg-[#252f37] rounded-2xl min-w-96 p-4">
                    <div>
                        <h3 className="font-bold">GAMES RUN</h3>
                    </div>
                    <RunsList />
                </div>
            </div>
        </>
    )
}