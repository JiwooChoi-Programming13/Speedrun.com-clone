import { createBrowserRouter } from 'react-router-dom'
import Home from '../../home.jsx'
import Series from '../../series.jsx'
import Leaderboard from '../../leaderboard.jsx'
import About from '../../about.jsx'
import Login from '../../login.jsx'
import SignUp from '../../sign-up.jsx'
import Account from '../../account.jsx'
import Settings from '../../settings.jsx'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/series",
        element: <Leaderboard />
    },
    {
        path: "/about",
        element: <Account />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <SignUp />,
    },
    {
        path: "/settings",
        element: <Settings />
    }
])