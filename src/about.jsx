import Navigation from "./components/Navigation/nav.jsx"
import Logo from "./assets/Logo.png"
import Checkmark from "./assets/Checkmark.png"
import "./CSS/about.css"

export default function About() {
    return (
        <>
            <Navigation />
            <div className="background"></div>

            {/*
            FIXME: Look for possible styling fixes in the future
            */}

            <div className="about-container">
                <div className="title-container">
                    <div className="title-content">
                        <img className="title-logo" src={Logo} alt="" />
                        <h1 className="title">SPEEDRUN.COM (NOT!)</h1>
                    </div>

                    <div className="beginning-content">
                        <p className="title-text">
                            Speedrun.com (Not!) is the false platform for game
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
                        <p className="info-text">
                            Speedrunning is the act of completing a video game
                            as fast as possible. Here's a Wii Sports speedrun
                            where the goal is to complete a Wii Fitness training
                            session.
                        </p>

                        <iframe className="video-example" src="https://www.youtube.com/embed/q4hBaYFACIo"
                        title="Explanation speedrun" allowFullScreen>
                        </iframe>
                    </div>
                </div>

                <div className="stats-container">
                    <div className="title-content">
                        <h2 className="title">HOW BIG IS SPEEDRUN.COM (NOT!)?</h2>
                    </div>
                    <div className="stats-content">
                        <p className="info-text">
                            Speedrunning has exploded in popularity in recent years.
                            But not here! Speedrun.com (Not!) is a not so vibrant
                            growing platform with no less than 1 active user.
                        </p>
                    </div>

                    <div className="grid-container">
                        <div className="grid-content">
                            <h3 className="stats">0</h3>
                            <p className="stats-text">Yearly visitors</p>
                        </div>

                        <div className="grid-content">
                            <h3 className="stats">0</h3>
                            <p className="stats-text">Speedruns</p>
                        </div>

                        <div className="grid-content">
                            <h3 className="stats">0</h3>
                            <p className="stats-text">Registered users</p>
                        </div>

                        <div className="grid-content">
                            <h3 className="stats">0</h3>
                            <p className="stats-text">Game communities</p>
                        </div>
                    </div>
                </div>

                <div className="features-container">
                    <div className="title-content">
                        <h2 className="title">
                            WHAT FEATURES DOES SPEEDRUN.COM (NOT!) OFFER?
                        </h2>
                    </div>

                    <div className="features-content">
                        <p className="info-text">
                            Speedrun.com (Not!) offers a comprehensive suite of
                            tools for runners to track their progress, and fans
                            to follow along.
                        </p>
                    </div>

                    <div className="features-grid-container">
                        <div className="features-grid-content">
                            <img src={Checkmark} alt="Checkmark" />
                            <p>Leaderboards and rankings</p>
                        </div>

                        <div className="features-grid-content">
                            <img src={Checkmark} alt="Checkmark" />
                            <p>Game cusomization</p>
                        </div>

                        <div className="features-grid-content">
                            <img src={Checkmark} alt="Checkmark" />
                            <p>Moderation tools</p>
                        </div>

                        <div className="features-grid-content">
                            <img src={Checkmark} alt="Checkmark" />
                            <p>User profiles</p>
                        </div>

                        <div className="features-grid-content">
                            <img src={Checkmark} alt="Checkmark" />
                            <p>Notifications from other users</p>
                        </div>
                    </div>
                </div>

                <div className="advertise-container">
                    <div className="title-content">
                        <h2 className="title">ADVERTISE ON SPEEDRUN.COM (NOT!)</h2>
                    </div>

                    <div className="advertise-content">
                        <p className="info-text">
                            With Speedrun.com (Not!) being a bad influence for
                            posting your speedruns, why not help yourself and do
                            exactly just that. Have fun!
                        </p>
                        <button className="button">Post some speedruns</button>
                    </div>
                </div>
            </div>
        </>
    )
}