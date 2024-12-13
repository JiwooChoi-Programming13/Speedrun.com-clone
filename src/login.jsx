import { Link } from "react-router-dom";
import Navigation from "./components/navigation/nav.jsx";
import "./login.css"

export default function Login() {
    return (
        <>
            <Navigation />

            {/*
            FIXME: Have a database get the information from the registered account.
            */}

            <div className="login-container">
                <div className="login-content">
                    <div className="login-title-container">
                        <h3 className="login-title">LOGIN TO SPEEDRUN.COM (NOT!)</h3>
                    </div>

                    <div className="input-container">
                        <label htmlFor="username">Username</label>
                        <input className="login-input" type="text" id="username"/>

                        <label htmlFor="password">Password</label>
                        <input className="login-input" type="password" id="password"/>
                    </div>
                    <hr />

                    <div className="button-container">
                        <button className="login-button">Log in</button>
                        <button className="other-button">
                            <Link className="link" to="/signup">Sign up</Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}