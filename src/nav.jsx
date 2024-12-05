import { useState } from 'react'
import Logo from '../src/assets/Logo.png'
import Search from '../src/assets/Search.png'
import Notification from '../src/assets/Notification.png'
import Avatar from '../src/assets/AvatarTest.jpg'
import Account from '../src/assets/Account.png'
import Settings from '../src/assets/Settings.png'
import Logout from '../src/assets/Logout.png'
import './nav.css'
import './nav-media-queries.css'

function DropdownList({text, className = "dropdown-list", src, alt}) {
    return (
        <div className={className}>
            <img className='dropdown-image' src={src} alt={alt}/>
            <p>{text}</p>
        </div>
    )
}

export default function Navigation() {
    const [active, setActive] = useState(false);
    
    const handleDropdown = () => {
        setActive(!active);
    };

    return (
        <div className='navigation'>
            <div className='list'>
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

            <div className='list'>
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
                            <DropdownList
                                text="Username"
                                src={Account}
                                alt="Account"
                            />

                            <DropdownList
                                text="Settings"
                                src={Settings}
                                alt="Settings"
                            />

                            <DropdownList
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