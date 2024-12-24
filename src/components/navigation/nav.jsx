import { useState } from 'react'
import Logo from '../../assets/Logo.png'
import Search from '../../assets/Search.png'
import Notification from '../../assets/Notification.png'
import Avatar from '../../assets/AvatarTest.jpg'
import Account from '../../assets/Account.png'
import Settings from '../../assets/Settings.png'
import Logout from '../../assets/Logout.png'
import NavigationDropdown from '../dropdown-menus/nav-dropdown.jsx'
import './nav.css'
import './nav-media-queries.css'

export default function Navigation() {
    const [active, setActive] = useState(false);
    
    const handleDropdown = () => {
        setActive(!active);
    };

    return (
        <div className='navigation'>
            <div className='navigation-list'>
                <div className='logo-icon'>
                    <img
                    src={Logo}
                    alt="Logo"
                    className='logo'
                    />
                    <h3>SPEEDRUN.COM</h3>
                </div>

                <div className='hovered'>Games</div>
                <div className='hovered'>Series</div>
                <div className='hovered'>About</div>
                <div className='hovered help-tooltip'>Help</div>
            </div>

            <div className='navigation-list'>
                <div className='search-icon'>
                    <label htmlFor="search-bar">
                        <img
                        src={Search}
                        alt="Search"
                        className='search'/>
                    </label>

                    <input className='search-bar' type="text" id='search-bar' placeholder='Search...'/>
                </div>

                <div className='notification-icon'>
                    <img src={Notification}
                    alt="Notification"
                    className='notification'
                    />
                    <p className='notification-tooltip'>Notifications</p>
                </div>

                <div className='profile-icon' onClick={handleDropdown}>
                    <img
                    src={Avatar}
                    alt="Test"
                    className='profile'/>
                    
                    <p className='down-arrow'>&#9207;</p>
                    
                    {active && (
                    <div className='dropdown-menu'>
                        <div className='dropdown-menu-list'>
                            <NavigationDropdown
                                text="Username"
                                src={Account}
                                alt="Account"
                            />

                            <NavigationDropdown
                                text="Settings"
                                src={Settings}
                                alt="Settings"
                            />

                            <NavigationDropdown
                                text="Sign out"
                                src={Logout}
                                alt="Logout"
                            />
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
}