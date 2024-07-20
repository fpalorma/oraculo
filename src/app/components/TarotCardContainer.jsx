'use client'
import TarotCard from "./TarotCard";
import Button from "./Button";
import Input from "./Input";
import { useState } from "react";
import { getCard } from "../lib/Cards";
import { getPrediction } from "../lib/ai-tarot";


const TarotCardContainer = () => {

    const [card, setCard] = useState(null)
    const [prediction, setPrediction] = useState(null)

    const handleOnSubmit = (formData) => {
      const message = formData.get('userMessage')
      const num = Math.floor(Math.random()*21);
      const tarotCard = getCard(num);
      setCard(tarotCard);
      getPrediction(message, [tarotCard.name])
    }
  
    return(
        <>
        {
         card?(
          <>
         <TarotCard card={card}/>
         <p className="text-fuchsia-500  text-pretty text-center mx-60 mt-4 text-3sm pb-5 mb-4">{prediction}</p>
         </>
        ):<p className="text-white text-center">Haz click en el botón para conocer tu suerte</p>
        } 
        <div className="flex flex-col  items-center">
          <form action={handleOnSubmit}>
            <Input name='userMessage' />
            <Button texto={"Consultar al oráculo"}/>
          </form>
        </div>
       
    </>
    )
}

export default TarotCardContainer