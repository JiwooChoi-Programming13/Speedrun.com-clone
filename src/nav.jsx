import Logo from '../public/Logo.png'
import Search from '../public/Search.png'
import Notification from '../public/Notification.png'
import Avatar from '../public/AvatarTest.jpg'
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
                        <label htmlFor="search-bar">
                            <img
                            src={Search}
                            alt="Search"
                            className='search'/>
                        </label>

                        <input className='search-bar' type="text" id='search-bar' placeholder='Search...'/>
                    </li>
                    <li className='notification-icon'>
                        <img src={Notification}
                        alt="Notification"
                        className='notification'
                        />
                        <p className='notification-tooltip'>Notifications</p>
                    </li>
                    <li className='profile-icon'>
                        <img
                        src={Avatar}
                        alt="Test"
                        className='profile'/>
                        
                        <span>Dropdown</span>
                        
                        <div className='dropdown-menu'>
                            <div className='dropdown-menu-list'>
                                <p>Username</p>
                            </div>

                            <div className='dropdown-menu-list'>
                                <p>Settings</p>
                            </div>

                            <div className='dropdown-menu-list'>
                                <p>Sign out</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </>
    )
}