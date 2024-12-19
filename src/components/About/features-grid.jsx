export default function FeaturesGrid({ text }) {
    return (
        <>
            <div className="bg-[#252f37] flex gap-4 items-center p-4 rounded-lg text-lg">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="20"
                height="20"
                >
                <circle cx="24" cy="24" r="24" fill="#34A853" />

                <path
                    d="M16 24.5L21 30L32 18"
                    stroke="#FFFFFF"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                />
            </svg>
                <p>{text}</p>
            </div>
        </>
    )
}