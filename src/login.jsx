import Navigation from "./components/navigation/nav.jsx"

export default function Login() {
    return (
        <>
            <Navigation />
            <div>
                <h2>Login to Speedrun.com (Not!)</h2>
                <div>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username"/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password"/>
                    </div>
                </div>
                <div>
                    <button>Login</button>
                    <button>Sign up</button>
                </div>
            </div>
        </>
    )
}