import Navigation from "./components/navigation/nav.jsx";
import "./login.css"

export default function Login() {
    return (
        <>
            <Navigation />
            <div className="login-container">
                <div className="login-content">
                    <div className="login-title-container">
                        <h3 className="login-title">Login to Speedrun.com (Not!)</h3>
                    </div>

                    <div className="input-container">
                        <label htmlFor="username">Username</label>
                        <input className="login-input" type="text" id="username"/>

                        <label htmlFor="password">Password</label>
                        <input className="login-input" type="password" id="password"/>
                    </div>
                    <hr />
                    <div>
                        <button>Log in</button>
                        <button>Sign up</button>
                    </div>
                </div>
            </div>
        </>
    )
}