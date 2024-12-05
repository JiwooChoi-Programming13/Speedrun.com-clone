import Navigation from "./components/navigation/nav.jsx"
import GameImage from "./assets/Game-image.png"
import "./home.css"

export default function Home() {
    return (
        <>
            <Navigation/>
            <div className="container">
                <div className="games-list-container">
                    <div>
                        <div>
                            <p>1996</p>
                            <img className="game-image" src={GameImage} alt="Super Mario 64"/>
                            <p>Super Mario 64</p>
                            <p>Active players: 46</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}