const Input = ({ name }) => {
    return(
        <input className="bg-gray-200 appearance-none border-2 border-fuchsia-400 rounded py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name={name} type="text" placeholder="Ingrese su pregunta" required/>
    )
}

export default Input