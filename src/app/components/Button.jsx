const Button = ({texto, handler})=>{
    return(
        <>
        
        <button className="bg-fuchsia-500 hover:bg-fuchsia-700 text-white font-bold py-2 px-4 rounded " onClick={handler}>{texto}</button>
        </>
    )
}

export default Button