import { Link } from "react-router-dom";
import Navigation from "./components/Navigation/nav.jsx";

export default function SignUp() {
    return (
        <>
            <Navigation />

            {/*
            FIXME: Have a database for when you register a new account based on the
            information from the inputs
            */}
            <div className="login-container">
                <div className="login-content">
                    <div className="login-title-container">
                        <h4 className="login-title">SIGN UP FOR SPEEDRUN.COM (NOT!)</h4>
                    </div>

                    <div className="input-container">
                        <label htmlFor="username">
                            Username
                            <span className="required">*</span>
                        </label>
                        <input className="login-input" type="text" id="username" required/>

                        <label htmlFor="email">
                            Email address
                            <span className="required">*</span>
                        </label>
                        <input className="login-input" type="email" id="email"/>

                        <label htmlFor="password">
                            Password
                            <span className="required">*</span>
                        </label>
                        <input className="login-input" type="password" id="password" required/>

                        <label htmlFor="Location">Location</label>
                        <select name="Location" className="select">
                            <option>Choose a country</option>
                            <option value="Korea">SK</option>
                        </select>
                    </div>
                    <hr />

                    <div className="button-container">
                        <button className="login-button">Sign up</button>
                        <button className="other-button">
                            <Link className="link" to="/login">Already have an account?</Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}