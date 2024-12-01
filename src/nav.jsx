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
                        <h3>SPEEDRUN.COM</h3>
                    </li>
                    <li className='hovered'>Games</li>
                    <li className='hovered'>About</li>
                    <li className='hovered'>Help</li>
                    <li className='hovered'>Search</li>
                    <li className='hovered'>Notify</li>
                    <li className='hovered'>Account</li>
                </ul>
            </nav>
        </>
    )
}