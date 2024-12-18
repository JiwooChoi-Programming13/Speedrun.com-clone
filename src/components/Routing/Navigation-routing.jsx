import { createBrowserRouter } from 'react-router-dom'
import Home from '../../home.jsx'
import About from '../../about.jsx'
import Login from '../../login.jsx'
import SignUp from '../../sign-up.jsx'
import Navigation from '../Navigation/nav.jsx'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <SignUp />,
    },
])