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

                        <div className="game">
                            <div className="game-content">
                            <img className="game-image" src={GameImage} alt="Super Mario 64"/>
                                <div className="release-year">1996</div>
                                <div className="game-title">Super Mario 64</div>
                            </div>
                            <div className="details-content">
                                <p className="active-players">417 active players</p>
                                <div className="platform-container">
                                    <p className="platform">N64</p>
                                    <p className="platform">+3</p>
                                </div>
                            </div>
                        </div>

                        <div className="game">
                            <div className="game-content">
                            <img className="game-image" src={GameImage} alt="Super Mario 64"/>
                                <div className="release-year">1996</div>
                                <div className="game-title">Super Mario 64</div>
                            </div>
                            <div className="details-content">
                                <p className="active-players">417 active players</p>
                                <div className="platform-container">
                                    <p className="platform">N64</p>
                                    <p className="platform">+3</p>
                                </div>
                            </div>
                        </div>

                        <div className="game">
                            <div className="game-content">
                            <img className="game-image" src={GameImage} alt="Super Mario 64"/>
                                <div className="release-year">1996</div>
                                <div className="game-title">Super Mario 64</div>
                            </div>
                            <div className="details-content">
                                <p className="active-players">417 active players</p>
                                <div className="platform-container">
                                    <p className="platform">N64</p>
                                    <p className="platform">+3</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="game">
                            <div className="game-content">
                            <img className="game-image" src={GameImage} alt="Super Mario 64"/>
                                <div className="release-year">1996</div>
                                <div className="game-title">Super Mario 64</div>
                            </div>
                            <div className="details-content">
                                <p className="active-players">417 active players</p>
                                <div className="platform-container">
                                    <p className="platform">N64</p>
                                    <p className="platform">+3</p>
                                </div>
                            </div>
                        </div>

                        <div className="game">
                            <div className="game-content">
                            <img className="game-image" src={GameImage} alt="Super Mario 64"/>
                                <div className="release-year">1996</div>
                                <div className="game-title">Super Mario 64</div>
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