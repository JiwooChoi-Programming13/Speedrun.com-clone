import { Link } from "react-router-dom";
import Navigation from "./components/Navigation/nav.jsx";
import RegisterInput from "./components/Register/input.jsx";
import "./index.css";

export default function SignUp() {
    return (
        <>
            <Navigation />

            {/*
            FIXME: Have a database for when you register a new account based on the
            information from the inputs
            */}
            <div className="flex items-center justify-center h-[90vh] px-2">
                <div className="bg-[#252f37] rounded-lg max-w-sm w-full max-[900px]:max-w-none">
                    <div className="mb-1 pb-4 py-2 px-3.5">
                        <h4 className="font-bold">SIGN UP FOR SPEEDRUN.COM (NOT!)</h4>
                    </div>

                    <div className="flex flex-col gap-3 mb-6 py-1 px-3.5">
                        <RegisterInput
                        text="Username"
                        required={<span>*</span>}
                        />

                        <RegisterInput
                        text="Email"
                        type="email"
                        required={<span>*</span>}
                        />

                        <RegisterInput
                        text="Password"
                        type="password"
                        required={<span>*</span>}
                        />
                        
                        <label htmlFor="Location">Location</label>
                        <select name="Location" className="bg-black rounded py-2.5 px-1">
                            <option value="South Korea">South Korea</option>
                        </select>
                    </div>
                    <hr className="opacity-20"/>

                    <div className="flex gap-3 justify-between my-5 py-1 px-3.5 min-w-max max-[306px]:flex-col">
                        <button className="login-button">Sign up</button>
                        <button className="other-button bg-black text-[#b4b4b4]">
                            <Link className="link" to="/login">Already have an account?</Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}