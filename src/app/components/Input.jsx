const Input = ({ name }) => {
    return(
        <input className="my-2 p-1" name={name} type="text" placeholder="Ingrese su pregunta" required/>
    )
}

export default Input