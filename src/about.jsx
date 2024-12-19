import Navigation from "./components/Navigation/nav.jsx"
import Logo from "./assets/Logo.png"
import Checkmark from "./assets/Checkmark.png"
import StatsGrid from "./components/About/stats-grid.jsx"
import "./index.css"

export default function About() {
    return (
        <>
            <Navigation />
            <div className="background"></div>

            {/*
            FIXME: Look for possible styling fixes in the future
            */}

            <div className="flex flex-col gap-40 mt-20 px-2">
                <div className="about-container">
                    <div className="flex items-center">
                        <img className="h-20" src={Logo} />
                        <h1 className="title">SPEEDRUN.COM (NOT!)</h1>
                    </div>

                    <div>
                        <p className="info-text text-white">
                            Speedrun.com (Not!) is the false platform for game
                            communities to organize around the activity of speedrunning.
                            We host communities for thousands of games, each with
                            their own leaderboards, rules, moderators,
                            and participants.
                        </p>
                    </div>
                </div>

                <div className="about-container">
                    <h2 className="title">WHAT IS SPEEDRUNNING?</h2>

                    <p className="info-text">
                        Speedrunning is the act of completing a video game
                        as fast as possible. Here's a Wii Sports speedrun
                        where the goal is to complete a Wii Fitness training
                        session.
                    </p>

                    <div className="box-border border-8 border-[#199C77] rounded-md">
                        <iframe className=""
                        src="https://www.youtube.com/embed/q4hBaYFACIo"
                        width="760" height="440" title="Explanation speedrun" allowFullScreen>
                        </iframe>
                    </div>
                </div>

                <div className="about-container">
                    <h2 className="title">HOW BIG IS SPEEDRUN.COM (NOT!)?</h2>

                        <p className="info-text">
                            Speedrunning has exploded in popularity in recent years.
                            But not here! Speedrun.com (Not!) is a not so vibrant
                            growing platform with no less than 1 active user.
                            <span className="block">(That being me)</span>
                        </p>

                    <div className="grid grid-cols-4 gap-2.5">
                        <StatsGrid
                        text="Yearly visitors"
                        />

                        <StatsGrid
                        text="Speedruns"
                        />

                        <StatsGrid
                        text="Registered users"
                        />

                        <StatsGrid
                        text="Game communities"
                        />
                    </div>
                </div>

                <div className="about-container">
                    <h2 className="title">
                        WHAT FEATURES DOES SPEEDRUN.COM (NOT!) OFFER?
                    </h2>
                    
                    <p className="info-text">
                        Speedrun.com (Not!) offers a comprehensive suite of
                        tools for runners to track their progress, and fans
                        to follow along.
                    </p>

                    {/* TODO: Make a component prop to avoid repetition */}

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

                <div className="about-container mb-20">
                    <div>
                        <h2 className="title">ADVERTISE ON SPEEDRUN.COM (NOT!)</h2>
                    </div>

                    <p className="info-text">
                        With Speedrun.com (Not!) being a bad influence for
                        posting your speedruns, why not help yourself and do
                        exactly just that. Have fun!
                    </p>
                    <button className="bg-[#199C77] rounded-md cursor-pointer font-bold p-2">Post some speedruns</button>
                </div>
            </div>
        </>
    )
}