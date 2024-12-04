import { useState } from 'react'
import Logo from '../public/Logo.png'
import Search from '../public/Search.png'
import Notification from '../public/Notification.png'
import Avatar from '../public/AvatarTest.jpg'
import './nav.css'
import './nav-media-queries.css'

function DropdownList({text, className = "dropdown-menu-list"}) {
    return (
        <div className={className}>
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
                <li className='hovered help-tooltip'>Help</li>
            </div>

            <div className='list'>
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

                <li className='profile-icon' onClick={handleDropdown}>
                    <img
                    src={Avatar}
                    alt="Test"
                    className='profile'/>
                    
                    <span>Dropdown</span>
                    {active && (
                    <div className='dropdown-menu'>
                        <DropdownList
                        text="Username"
                        />

                        <DropdownList
                        text="Settings"
                        />

                        <DropdownList
                        text="Sign out"
                        />
                    </div>
                    )}
                </li>
            </div>
        </div>
    )
}