'use client'
import TarotCard from "./TarotCard";
import Button from "./Button";
import { useEffect, useState } from "react";
import {getCard} from "../lib/Cards";


const TarotCardContainer = () => {

    const [card, setCard] = useState(null)
    const handleGetCard = ()=>{
        getCard(Math.floor(Math.random()*21)).then(res => {
            setCard(res)
          })
          .catch(error =>{
            console.log(error);
          })
    }
  
  
    
    

    return(
        <>
       {
       card?<TarotCard card={card}/>:<p className="text-white text-center">Haz click en el botón para conocer tu suerte</p>
       } 
        <div className="flex flex-col  items-center">

        <Button handler={handleGetCard} texto={"Consultar al oráculo"}/>
        </div>
       
    </>
    )
}

export default TarotCardContainer