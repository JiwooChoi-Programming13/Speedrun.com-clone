export default function NavigationDropdown({text, src, alt}) {
    return (
        <div className="dropdown-list">
            <img className='dropdown-image' src={src} alt={alt}/>
            <p>{text}</p>
        </div>
    )
}