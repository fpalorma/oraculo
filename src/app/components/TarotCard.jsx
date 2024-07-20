
const { default: Image } = require("next/image");

const TarotCard = ({card}) => {



  return (
    <>
      <div className="flex flex-col items-center justify-center " key={card.id}>
          <Image className="shadow-xl shadow-fuchsia-500/25 my-4" width={199} height={340} src={card.img} alt={`carta ${card.name}`} />
          <h3 className="text-fuchsia-500 mt-2 text-2xl">{card.name}</h3>
          
        </div>
    </>
  );
};

export default TarotCard;
