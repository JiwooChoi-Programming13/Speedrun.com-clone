import Navigation from "./components/navigation/nav.jsx"
import Logo from "./assets/Logo.png"
import "./about.css"

export default function About() {
    return (
        <>
            <Navigation />
            <div className="background"></div>

            <div className="about-container">
                <div className="title-container">
                    <div className="title-content">
                        <img className="title-logo" src={Logo} alt="" />
                        <h1 className="title">SPEEDRUN.COM (NOT!)</h1>
                    </div>
                    <div>
                        <p className="title-text">
                            Speedrun.com (Not!) is the false platfrom for game
                            communities to organize around the activity of speedrunning.
                            We host communities for thousands of games, each with
                            their own leaderboards, rules, moderators,
                            and participants.
                        </p>
                    </div>
                </div>

                <div className="explain-container">
                    <div className="title-content">
                        <h2 className="title">WHAT IS SPEEDRUNNING?</h2>
                    </div>
                    <div className="explanation-content">
                        <p className="explanation-text">
                            Speedrunning is the act of completing a video game
                            as fast as possible. Here's a Wii Sports speedrun
                            where the goal is to complete a Wii Fitness training
                            session.
                        </p>

                        <iframe className="video-example" width="700" height="400" src="https://www.youtube.com/embed/q4hBaYFACIo"
                        title="Explanation speedrun" allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </div>
        </>
    )
}