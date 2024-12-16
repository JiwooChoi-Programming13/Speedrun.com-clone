import { useState } from 'react'
import { Link } from "react-router-dom"
import NavigationList from './nav-list-item.jsx'
import Logo from '../../assets/Logo.png'
import Search from '../../assets/Search.png'
import '../../CSS/Navigation/nav.css'
import '../../CSS/Navigation/nav-search-bar.css'
// import '../../CSS/Media-queries/nav-media-queries.css'

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
                link="/about"
                />
                <div className='hovered help-tooltip'>Help</div>
            
                {/*
                FIXME: Make the searchbar interactive based on the value of the input
                */}
                <div className='search-icon'>
                    <label htmlFor="search-bar">
                        <img
                        src={Search}
                        alt="Search"
                        className='hovered search'/>
                    </label>

                    <input className='search-bar' type="text" id='search-bar' placeholder='Search...'/>
                </div>

                <div className='buttons-container'>
                    <button className='hovered login'>
                        <Link className='link' to="/login">Log in</Link>
                    </button>
                    <button className='sign-up'>
                        <Link className='link sign-up' to="/signup">Sign up</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}