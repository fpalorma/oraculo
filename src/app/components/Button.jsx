const Button = ({ texto, handleOnClick, disabled })=>{
    return(
        <>
        <button disabled={disabled}  className="bg-fuchsia-500 hover:bg-fuchsia-700 text-white font-bold py-2 px-4 rounded disabled:bg-fuchsia-300" type="submit" onClick={handleOnClick}>{texto}</button>
        </>
    )
}

export default Button