import Checkmark from "./assets/Checkmark.png"

export default function FeaturesGrid({ text }) {
    return (
        <>
            <div className="features-grid-content">
                <img src={Checkmark} alt="Checkmark" />
                <p>{text}</p>
            </div>
        </>
    )
}