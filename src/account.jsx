import Navigation from "./components/Navigation/nav";
import Avatar from "./assets/AvatarTest.jpg";
import "./index.css";

export default function Account() {
    return (
        <>
            <Navigation />
            <div className="flex justify-center mt-20">
                <div className="bg-[#252f37] rounded-2xl">
                    <div className="flex items-center gap-2 p-10">
                        <div>
                            <img className="rounded-full h-20 w-20" src={Avatar} alt=""/>
                        </div>
                        <div>
                            <div>
                                <h1 className="text-xl font-bold">Saxophone_Guy123</h1>
                            </div>

                            <div className="flex flex-col">
                                <div>
                                    <p>He/him</p>
                                </div>

                                <div className="flex items-center gap-2">
                                    <svg className="rounded-sm" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="30" height="20">
                                        <rect width="300" height="200" fill="white" />
                                        <circle cx="150" cy="100" r="60" fill="red" />
                                    </svg>
                                    <p>Japan</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}