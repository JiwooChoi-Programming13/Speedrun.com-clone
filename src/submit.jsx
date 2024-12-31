import Navigation from "./components/Navigation/nav.jsx";
import TimeForm from "./components/Submit/time-form.jsx";
import LeaderboardRuns from "./components/Leaderboard/recent-runs-display.jsx";
import Avatar from "./assets/AvatarTest.jpg";

export default function Submit() {
    return (
        <>
            <Navigation />

            <div className="flex justify-center px-4 mt-32">
                <div className="flex flex-col gap-6 max-w-5xl w-full">
                    <div className="flex gap-4 max-[1020px]:flex-col">
                        <div className="flex flex-col max-w-5xl w-full">
                            <div className="bg-[#2c453f99] flex flex-col flex-no gap-5 rounded">
                                <div>
                                    <div className="py-2 px-4">
                                        <p className="font-semibold">SUBMIT RUN</p>
                                        <p className="font-semibold pt-6">Categorization</p>
                                        <p className="info-text text-base text-left">
                                            These values determine which leaderboards the run will be
                                            ranked on.
                                        </p>
                                    </div>

                                    <div className="flex flex-col mb-5 px-4 py-2">
                                        {/* 
                                        FIXME: Have a platforms list to filter out a list of
                                        specific platform
                                        */}
                                        <h3>Category <span>*</span></h3>
                                        <select className="options w-full">
                                            <option value="120 Star">120 Star</option>
                                        </select>
                                    </div>
                                    <hr className="opacity-15"/>
                                </div>

                                <div>
                                    <div className="p-4">
                                        <p>Players</p>
                                        <p className="info-text text-base text-left">
                                            Which player took part in this run?
                                        </p>
                                    </div>

                                    <div className="flex flex-col mb-5 px-4 py-2">
                                        <p>Player 1 <span>*</span></p>
                                        <div className="options flex items-center gap-3 px-3 py-3 w-full">
                                            <img className="rounded-full h-8 w-8" src={Avatar} alt="" />
                                            <p>Saxophone_guy123</p>
                                        </div>
                                    </div>
                                    <hr className="opacity-15"/>
                                </div>

                                <div>
                                    <div className="p-4">
                                        <p>Run time</p>
                                        <p className="info-text text-base text-left">
                                            This time determines the placement of the run on the
                                            leaderboards. For the selected category, shorter times
                                            are considered better.
                                        </p>
                                    </div>

                                    <div className="flex flex-col mb-5 px-4 py-2">
                                        <p>Time <span>*</span></p>
                                        <form action="">
                                            <div className="flex focus:border-8">
                                                <TimeForm
                                                time="h"
                                                />

                                                <TimeForm
                                                time="m"
                                                padding="4"
                                                />

                                                <TimeForm
                                                time="s"
                                                />

                                                <TimeForm
                                                time="ms"
                                                padding="6"
                                                />
                                            </div>
                                        </form>
                                    </div>
                                    <hr className="opacity-15"/>
                                </div>

                                <div>
                                    <div className="p-4">
                                        <p>Video</p>
                                        <p className="info-text text-base text-left">
                                            The moderators for this game require video proof in order
                                            to verify this run.
                                        </p>
                                    </div>

                                    <div className="flex flex-col mb-5 px-4 py-2">
                                        <p>Video URL <span>*</span></p>
                                        <div className="options flex items-center gap-3 px-3 py-5 w-full"></div>
                                    </div>
                                    <hr className="opacity-15"/>
                                </div>

                                <div>
                                    <div className="p-4">
                                        <p>Other details</p>
                                        <p className="info-text text-base text-left">
                                            These values provide useful information about the run, but
                                            do not affect its placement on the leaderboards.
                                        </p>
                                    </div>

                                    <div className="flex flex-col mb-5 px-4 py-2">
                                        {/* 
                                        FIXME: Have a platforms list to filter out a list of
                                        specific platform
                                        */}
                                        <p>Verified <span>*</span></p>
                                        <select className="options w-full">
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </select>
                                        
                                        <p className="info-text text-xs text-left pt-2">
                                            For moderator use only, please leave set to "Yes".
                                            See game rules for details.
                                        </p>
                                    </div>

                                    <div className="flex flex-col mb-5 px-4 py-2">
                                        <p>Date <span>*</span></p>
                                        <input type="date" className="date-input"/>
                                    </div>

                                    <div className="flex flex-col mb-5 px-4 py-2">
                                        <div className="flex flex-col gap-5">
                                            <div>
                                                <p>Platform <span>*</span></p>
                                                <select className="options w-full">
                                                    <option value="PC">PC</option>
                                                </select>
                                            </div>
                                            <div className="flex gap-2">
                                                <input type="checkbox" id="emu-check"/>
                                                <label htmlFor="emu-check" className="cursor-pointer">
                                                    An emulator was used for this run
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <div className="flex flex-col mb-5 px-4 py-2">
                                            <p>Description</p>
                                            <textarea className="bg-black"></textarea>
                                        </div>
                                    </div>

                                    <hr className="opacity-15"/>
                                </div>

                                <div className="p-3">
                                    <button className="login-button">Submit</button>
                                </div>
                            </div>
                        </div>

                        <LeaderboardRuns/>
                    </div>
                </div>
            </div>
        </>
    )
}