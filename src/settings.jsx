import Navigation from "./components/Navigation/nav";
import Avatar from "./assets/AvatarTest.jpg";
import RegisterInput from "./components/Register/input";

export default function Settings() {
    return (
        <>
            <Navigation/>
            <div className="flex justify-center my-20 px-4 w-full">  
                <div className="bg-[#252f37] flex flex-col gap-8 rounded-2xl p-4 max-w-full">
                    <p className="text-lg font-bold">YOUR PROFILE</p>

                    <div className="flex flex-col gap-4">
                        <div>
                            <p className="settings-title">Account</p>
                            <p className="settings-text">
                                Only your username will be visible to the public. Change your
                                account details to whatever you want.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 w-full">
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
                            <p className="settings-title">Avatar</p>
                        </div>

                        <div className="flex gap-2 mt-2">
                            <img className="border-4 border-black h-14 w-14" src={Avatar} alt="" />
                            <button className="bg-[#354008] self-start p-2 rounded text-sm">
                                Change
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div>
                            <p className="settings-title">Biography and Pronouns</p>
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
                            <p className="settings-title">Pronouns</p>
                            <div className="grid grid-flow-col
                            max-[620px]:grid-rows-2 max-[460px]:grid-rows-3 max-[350px]:grid-rows-5">
                                <div className="flex gap-1.5">
                                    <label>N/A</label>
                                    <input className="align-middle" type="checkbox"/>
                                </div>

                                <div className="flex gap-1.5">
                                    <label>He/him</label>
                                    <input className="align-middle" type="checkbox"/>
                                </div>

                                <div className="flex gap-1.5">
                                    <label>She/her</label>
                                    <input className="align-middle" type="checkbox"/>
                                </div>

                                <div className="flex gap-1.5">
                                    <label>They/them</label>
                                    <input className="align-middle" type="checkbox"/>
                                </div>

                                <div className="flex gap-1.5">
                                    <label>It/its</label>
                                    <input className="align-middle" type="checkbox"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div>
                            <p className="settings-title">Location</p>
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
                    
                    <div className="flex justify-between">
                        <button className="other-button w-max">Save</button>
                        <button className="other-button bg-red-600 w-max">Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}