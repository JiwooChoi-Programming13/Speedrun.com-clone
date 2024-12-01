import Logo from '../public/Logo.png'
import './nav.css'

export default function Navigation() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <img src={Logo} alt="Logo" />
                    </li>
                    <li>Games</li>
                    <li>About</li>
                    <li>Help</li>
                    <li>Search</li>
                    <li>Notify</li>
                    <li>Account</li>
                </ul>
            </nav>
        </>
    )
}