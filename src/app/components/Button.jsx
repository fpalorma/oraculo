const Button = ({ texto, handleOnClick })=>{
    return(
        <>
        <button className="bg-fuchsia-500 hover:bg-fuchsia-700 text-white font-bold py-2 px-4 rounded " type="submit" onClick={handleOnClick}>{texto}</button>
        </>
    )
}

export default Button