export default function RegisterInput({ text, type = "text", required = "", classname = "login-input"}) {
    return (
        <>
            <label htmlFor={text}>
                {text}
                {required}
            </label>
            <input className={classname} type={type} id={text}/>
        </>
    )
}