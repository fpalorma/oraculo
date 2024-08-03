import { useEffect, useState } from "react";
import { cinzel } from "../ui/fonts";

const { default: Image } = require("next/image");

const TarotCard = ({ card }) => {
  const [animate, setAnimate] = useState('');

  useEffect(() => {
    setAnimate('animate__animated animate__flipInY')
  }, [])

  return (
    <>
      <div className={`flex flex-col items-stretch md:items-center`} key={card.id}>
        <Image className={`shadow-xl shadow-fuchsia-500/25 my-4 ${animate}`} width={199} height={340} src={card.img} alt={`carta ${card.name}`} />
        {card.name && <h3 className={`animate__animated animate__fadeIn text-fuchsia-500 mt-1 text-center text-lg md:text-2xl ${cinzel.className}`}>{card.name}</h3>}
      </div>
    </>
  );
};

export default TarotCard;
