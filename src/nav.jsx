import Logo from '../public/Logo.png'
import Search from '../public/Search.png'
import Notification from '../public/Notification.png'
import './nav.css'

export default function Navigation() {
    return (
        <>
            <nav>
                <ul>
                    <li className='logo-icon'>
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
                    <li className='search-icon'>
                        <div className='search-bar-placeholder'>
                        <img
                        src={Search}
                        alt="Search"
                        className='search'/>
                        <p>Search...</p>
                        </div>
                        <div className='search-bar-shortcut'>
                                /
                        </div>
                    </li>
                    <li className='notification-icon'>
                        <img src={Notification}
                        alt="Notification"
                        className='notification'
                        />
                    </li>
                    <li className='hovered'>Account</li>
                </ul>
            </nav>
        </>
    )
}