import Navigation from "./components/navigation/nav.jsx"
import GameImage from "./assets/Game-image.png"
import "./home.css"

export default function Home() {
    return (
        <>
            <Navigation/>
            <div className="container">
                <div className="games-list-container">
                    <div className="games-list">
                        <div className="game-content">
                        <img className="game-image" src={GameImage} alt="Super Mario 64"/>
                            <div className="top-info">
                                <p>1996</p>
                            </div>
                            <p>Super Mario 64</p>
                            <div>
                                <div>
                                    <p>Active players: 46</p>
                                </div>
                                <p>N64</p>
                                <p>+3</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}