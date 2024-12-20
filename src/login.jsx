import { Link } from "react-router-dom";
import Navigation from "./components/Navigation/nav.jsx";
import RegisterInput from "./components/Register/input.jsx";
import "./index.css";

export default function Login() {
    return (
        <>
            <Navigation />

            {/*
            FIXME: Have a database get the information from the registered account.
            */}

            <div className="flex items-center justify-center h-[90vh] px-2">
                <div className="bg-[#252f37] rounded-lg max-w-sm w-full max-[900px]:max-w-none">
                    <div className="mb-1 pb-4 py-2 px-3.5">
                        <h3 className="font-bold">LOGIN TO SPEEDRUN.COM (NOT!)</h3>
                    </div>

                    <div className="flex flex-col gap-3 mb-6 py-1 px-3.5">
                        <RegisterInput
                        text="Username"
                        />

                        <RegisterInput
                        text="Password"
                        type="password"
                        />
                    </div>
                    <hr className="opacity-20"/>

                    <div className="flex gap-3 justify-between my-5 py-1 px-3.5 min-w-max max-[254px]:flex-col max-[254px]:gap-10">
                        <button className="login-button">Log in</button>
                        <button className="other-button bg-black text-[#b4b4b4]">
                            <Link className="link" to="/signup">Sign up</Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}