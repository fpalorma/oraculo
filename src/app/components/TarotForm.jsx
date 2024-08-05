"use client";
import TarotCard from "./TarotCard";
import Button from "./Button";
import Input from "./Input";
import { useState } from "react";
import { getCards, CARDS_BACK } from "../lib/Cards";
import { getPrediction } from "../lib/ai-tarot";

const TarotForm = () => {
  const [cards, setCards] = useState([]);
  const [prediction, setPrediction] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const handleOnSubmit = async (formData) => {
    const message = formData.get("userMessage");
    const tarotCards = getCards();
    const cardsNames = tarotCards.map((card) => card.name);
    const response = await getPrediction(message, cardsNames);
    setPrediction(response.message);
    setCards(response.isOk ? tarotCards : []);
  };

  const onClick = () => {
    setPrediction(null);
    setCards(CARDS_BACK);
  }

  return (
    <>
      <div>
        <form
          className="flex flex-col gap-y-1 md:flex-row md:justify-center md:gap-x-2 items-center mb-4"
          action={handleOnSubmit}
        >
          <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} name="userMessage" />
          <Button disabled={!inputValue.trim()} texto={"Consultar al oráculo"} handleOnClick={onClick} />
        </form>
        {
          !prediction && (
            <p className="text-white text-center">
              Este Oráculo funciona eligiendo 3 arcanos mayores del Tarot Rider y en base a esas cartas, la IA realizará una predicción. <br />Por favor, escribe tu consulta y a continuación haz click en el botón
            </p>
          )
        }
      </div>
      <div className="flex flex-row flex-nowrap md:justify-evenly justify-between gap-x-4 mx-2 md:gap-x-12">
        {cards.map((card) => <TarotCard key={card.id} card={card} />)}
      </div>
      {prediction && (
        <p className="animate__animated animate__fadeIn text-fuchsia-500 text-pretty text-center mx-4 mt-2 pb-2 md:mx-60 md:mt-4 md:text-lg md:pb-10">
          {prediction}
        </p>
      )}
    </>
  );
};

export default TarotForm;
