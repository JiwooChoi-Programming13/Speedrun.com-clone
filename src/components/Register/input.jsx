export default function RegisterInput({ text, type = "text", required = "" }) {
    return (
        <>
            <label htmlFor={text}>
                {text}
                {required}
            </label>
            <input className="login-input" type={type} id={text}/>
        </>
    )
}