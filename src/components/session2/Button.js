function Button(props) {
    return(
        <>
            <button type={props.type} onClick={props.func}>{props.title}</button>
        </>
    )
}
export default Button;