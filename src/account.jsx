import Navigation from "./components/Navigation/nav";
import Avatar from "./assets/AvatarTest.jpg";

export default function Account() {
    return (
        <>
            <Navigation />

            <div>
                <div>
                    <div>
                        <div>
                            <img className="rounded-full h-20 w-20" src={Avatar} alt=""/>
                        </div>
                        <div>
                            <p>Saxophone_Guy123</p>
                            <p>He/him</p>

                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="300" height="200">
                                    <rect width="300" height="200" fill="white" />
                                    <circle cx="150" cy="100" r="60" fill="red" />
                                </svg>
                                <p>Japan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}