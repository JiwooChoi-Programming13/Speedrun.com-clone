import { useState } from 'react'
import { Link } from "react-router-dom"
import NavigationList from './nav-list-item.jsx'
import Logo from '../../assets/Logo.png'
import Search from '../../assets/Search.png'
import "../../index.css"

export default function Navigation() {
    // const [active, setActive] = useState(false);
    
    // const handleDropdown = () => {
    //     setActive(!active);
    // };

    return (
        <div className='bg-[#199c77] flex gap-6 justify-center opacity-90 py-2 top-0 sticky z-10'>
            {/* TODO: Have links for the navigation (ALMOST DONE) */}
            <div className='flex gap-4'>
                <div className='flex items-center pointer-events-none'>
                    <img
                    src={Logo}
                    alt="Logo"
                    className='h-10'
                    />
                    <h3 className='font-bold'>SPEEDRUN.COM</h3>
                </div>
                {/* TODO: Make another dropdown for the list-item-container */}
                <div className='flex gap-4 items-center'>
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
                </div>
            </div>
            
            {/*
            FIXME: Make the searchbar interactive based on the value of the input
            */}
            <div className='flex gap-4'>
                <div className='flex items-center gap-2'>
                    <label htmlFor="search-bar">
                        <img
                        src={Search}
                        alt="Search"
                        className='rounded-lg p-2 mt-1'/>
                    </label>

                    <input className='bg-[#3232324d] box-border rounded-md cursor-pointer text-base text-white p-2 w-72' type="text" id='search-bar' placeholder='Search...'/>
                </div>
                <div className='flex gap-2 min-w-max'>
                    <button>
                        <NavigationList
                        text="Log in"
                        link="/login"
                        />
                    </button>
                    <button className='bg-white p-2 rounded-md'>
                        <Link className='text-[#199c77] font-bold' to="/signup">Sign up</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}