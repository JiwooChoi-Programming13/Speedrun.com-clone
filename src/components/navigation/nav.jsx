import { useState } from 'react'
import Logo from '../../assets/Logo.png'
import Search from '../../assets/Search.png'
import Notification from '../../assets/Notification.png'
import NavigationList from './nav-list-item.jsx'
import SignAccount from './login-nav-buttons.jsx'
import './nav.css'
import './nav-media-queries.css'

export default function Navigation() {
    const [active, setActive] = useState(false);
    
    const handleDropdown = () => {
        setActive(!active);
    };

    return (
        <div className='navigation'>
            {/* TODO: Have links for the navigation (ALMOST DONE) */}
            <div className='navigation-list'>
                <div className='logo-icon'>
                    <img
                    src={Logo}
                    alt="Logo"
                    className='logo'
                    />
                    <h3>SPEEDRUN.COM</h3>
                </div>

                <NavigationList
                text="Games"
                link="/"
                />
                <div className='hovered'>Series</div>
                <NavigationList
                text="About"
                link="about"
                />
                <div className='hovered help-tooltip'>Help</div>
            </div>

            <div className='navigation-list'>
                {/*
                FIXME: Make the searchbar interactive based on the value of the input
                */}
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

                <SignAccount />
            </div>
        </div>
    )
}