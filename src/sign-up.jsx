import Navigation from "./components/navigation/nav";
import "./login.css"

export default function SignUp() {
    return (
        <>
            <Navigation />

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
                    </div>
                    <hr />

                    <div className="button-container">
                        <button className="login-button">Sign up</button>
                        <button className="other-button">Already have an account?</button>
                    </div>
                </div>
            </div>
        </>
    )
}