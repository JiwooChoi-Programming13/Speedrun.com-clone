import { useState } from 'react'
import NavigationList from './nav-list-item.jsx'
import Logo from '../../assets/Logo.png'

export default function Navigation() {
    // const [active, setActive] = useState(false);
    
    // const handleDropdown = () => {
    //     setActive(!active);
    // };

    return (
        <div className='bg-[#199c77] opacity-95 top-0 sticky z-20'>
            {/* TODO: Have links for the navigation (ALMOST DONE) */}
            <div className='flex gap-4 justify-center w-full py-2 px-2 max-[1126px]:justify-between max-[1126px]:gap-2'>
                <div className='flex gap-4'>
                    <div className='flex items-center pointer-events-none max-[1000px]:min-w-max'>
                        <img
                        src={Logo}
                        alt="Logo"
                        className='h-12'
                        />
                        <h3 className='font-bold text-lg max-[1000px]:hidden'>SPEEDRUN.COM</h3>
                    </div>
                    {/* TODO: Make another dropdown for the list-item-container */}
                    <div className='flex gap-4 items-center max-[1000px]:hidden'>
                        <NavigationList
                        text="Games"
                        link="/"
                        />
                        <NavigationList
                        text="Series"
                        link="/series"
                        />

                        <NavigationList
                        text="About"
                        link="/about"
                        />
                        <div className='hovered'>Help</div>
                    </div>
                </div>
                
                {/*
                FIXME: Make the searchbar interactive based on the value of the input
                */}
                <div className='flex gap-4'>
                    <div className='flex items-center gap-2'>
                        <label htmlFor="search-bar">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                viewBox="0 -2 26 26"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="cursor-pointer text-black"
                                >
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>
                        </label>

                        <input className='bg-[#3232324d] box-border rounded-md cursor-pointer text-base text-white p-2 w-96 max-[1126px]:hidden'
                        type="text" id='search-bar' placeholder='Search...'/>
                    </div>
                    <div className='flex gap-2 min-w-max'>
                        <button>
                            <NavigationList
                            text="Log in"
                            link="/login"
                            />
                        </button>
                        <button className=''>
                            <NavigationList
                            text="Sign up"
                            link="/signup"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}