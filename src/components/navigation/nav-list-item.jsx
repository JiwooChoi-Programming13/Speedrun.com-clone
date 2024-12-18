import { Link } from "react-router-dom"

export default function NavigationList({ text, link }) {
    return (
        <>
            <div className="hovered">
                <Link to={link}>{text}</Link>
            </div>
        </>
    )
}