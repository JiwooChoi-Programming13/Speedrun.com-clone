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
                        <div >
                            <div className="game-content">
                            <img className="game-image" src={GameImage} alt="Super Mario 64"/>
                                <div className="top-info">
                                    <p className="release-year">1996</p>
                                </div>
                                <div className="bottom-info">
                                    <p>Super Mario 64</p>
                                </div>
                            </div>
                            <div className="details-content">
                                <p className="active-players">417 active players</p>
                                <div className="platform-container">
                                    <p className="platform">N64</p>
                                    <p className="platform">+3</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}