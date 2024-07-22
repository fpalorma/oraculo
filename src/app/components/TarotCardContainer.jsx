'use client'
import TarotCard from "./TarotCard";
import Button from "./Button";
import Input from "./Input";
import { useState } from "react";
import { getCards } from "../lib/Cards";
import { getPrediction } from "../lib/ai-tarot";


const TarotCardContainer = () => {

    const [cards, setCards] = useState([])
    const [prediction, setPrediction] = useState(null)

    const handleOnSubmit = async (formData) => {
      const message = formData.get('userMessage')
      const tarotCards = getCards();
      const cardsNames = tarotCards.map((card)=>card.name)
      const response = await getPrediction(message, cardsNames)
      console.log(response.message);
      setPrediction(response.message)
      setCards(response.isOk?tarotCards:[])
    }
  
    return(
        <>
<div >
          <form className="flex flex-col gap-y-1 md:flex-row md:justify-center md:gap-x-2 items-center mb-4" action={handleOnSubmit}>
            <Input name='userMessage' />
            <Button texto={"Consultar al oráculo"}/>
          </form>
        </div>
        <div className="flex  justify-center gap-x-4 mx-2 md:gap-x-12">
        {
         cards.map(card=>(
          <TarotCard key={card.id} card={card}/>
         ))
        } 

        </div>
{        
prediction?<p className="text-fuchsia-500  text-pretty text-center mx-4 mt-2 pb-2 md:mx-60 md:mt-4 md:text-3sm md:pb-10">{prediction}</p>:<p className="text-white text-center">Haz click en el botón para conocer tu suerte</p>
}        
       
    </>
    )
}

export default TarotCardContainer