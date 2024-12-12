import Navigation from "./components/navigation/nav.jsx"

export default function Login() {
    return (
        <>
            <Navigation />
            <div>
                <h2>Login to Speedrun.com (Not!)</h2>
                <div>
                    <p>Username</p>
                    <p>Password</p>
                </div>
                <div>
                    <button>Login</button>
                    <button>Sign up</button>
                </div>
            </div>
        </>
    )
}