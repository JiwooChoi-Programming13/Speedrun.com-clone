<>
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
            {/*
                FIXME: Make this dropdown show when you are logged in
                and show a login and register buttons when not.
            */}
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
</>