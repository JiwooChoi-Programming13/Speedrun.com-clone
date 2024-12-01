import Logo from '../public/Logo.png'
import './nav.css'

export default function Navigation() {
    return (
        <>
            <nav>
                <ul>
                    <li className='image-container'>
                        <img
                        src={Logo}
                        alt="Logo"
                        className='logo'
                        />
                        <h2>Speedrun.com</h2>
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