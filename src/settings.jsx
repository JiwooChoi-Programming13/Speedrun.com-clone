import Navigation from "./components/Navigation/nav";
import Avatar from "./assets/AvatarTest.jpg";
import RegisterInput from "./components/Register/input";

export default function Settings() {
    return (
        <>
            <Navigation/>
            <div className="flex justify-center my-20 px-2 w-full">  
                <div className="bg-[#252f37] flex flex-col gap-8 rounded-2xl p-4 max-w-4xl">
                    <p className="text-lg font-bold">YOUR PROFILE</p>
                    <div>
                        <p>Customization</p>
                        <p className="settings-text">
                            Your name and avatar are visible on your profile and associated with your runs.
                            You can customize their look here.
                        </p>
                    </div>

                    <div>
                        <div>
                            <p>Account</p>
                            <p className="settings-text">
                                Only your username will be visible to the public. Change your
                                account details to whatever you want.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 w-7/12">
                            <RegisterInput
                            text="CHANGE USERNAME"
                            />

                            <RegisterInput
                            text="CHANGE PASSWORD"
                            />

                            <RegisterInput
                            text="CHANGE EMAIL"
                            />
                        </div>
                    </div>

                    <div>
                        <div>
                            <p>Avatar</p>
                        </div>

                        <div className="flex gap-2 mt-2">
                            <img className="h-14 w-14" src={Avatar} alt="" />
                            <button className="bg-[#354008] self-start p-2 rounded text-sm">
                                Change
                            </button>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p>Biography and Pronouns</p>
                            <p className="settings-text">
                                Information you share is visible to the public. You can change
                                or remove it any time.
                            </p>
                        </div>

                        <div>
                            <p>Biography</p>
                            <textarea
                            className="bg-black font-bold p-2 text-[#d1d5dbcc] w-full"
                            placeholder="Yeah"></textarea>
                        </div>
                        
                        <div>
                            <p>Pronouns</p>
                            <div className="flex gap-4">
                                <div className="flex gap-1">
                                    <label>He/him</label>
                                    <input className="align-middle" type="checkbox"/>
                                </div>

                                <div className="flex gap-1">
                                    <label>She/her</label>
                                    <input className="align-middle" type="checkbox"/>
                                </div>

                                <div className="flex gap-1">
                                    <label>They/them</label>
                                    <input className="align-middle" type="checkbox"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <p>Location</p>
                            <p className="settings-text">
                                Your location will be visible on your profile. Your country flag
                                will appear on leaderboards.
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <select name="Location" className="settings-location w-6/12">
                                <option value="South Korea">South Korea</option>
                            </select>
                            <select name="City" className="settings-location w-3/12">
                                <option value="-">-</option>
                                <option value="Busan">Busan</option>
                                <option value="Suwon">Suwon</option>
                                <option value="Seoul">Seoul</option>
                                <option value="Gangwon-do">Gangwon-do</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}