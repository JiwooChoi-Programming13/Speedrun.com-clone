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
                    <div className="title-text">
                        <p>
                            Speedrun.com (Not!) is the leading platfrom for game
                            communities to organize around the activity of speedrunning.
                            We host communities for thousands of games, each with
                            their own leaderboards, rules, moderators,
                            and participants.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}