import { Link } from "react-router-dom";
import Navigation from "./components/Navigation/nav.jsx";
import "./index.css"

export default function Login() {
    return (
        <>
            <Navigation />

            {/*
            FIXME: Have a database get the information from the registered account.
            */}

            <div className="flex items-center justify-center h-[90vh] px-2">
                <div className="bg-[#243237] rounded-lg max-w-sm w-full max-[900px]:max-w-none">
                    <div className="mb-1 py-2 px-3.5">
                        <h3 className="font-bold">LOGIN TO SPEEDRUN.COM (NOT!)</h3>
                    </div>

                    <div className="flex flex-col gap-3 mb-6 py-1 px-3.5">
                        <label htmlFor="username">Username</label>
                        <input className="login-input" type="text" id="username"/>

                        <label htmlFor="password">Password</label>
                        <input className="login-input" type="password" id="password"/>
                    </div>
                    <hr className="opacity-20"/>

                    <div className="flex justify-between my-5 py-1 px-3.5">
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