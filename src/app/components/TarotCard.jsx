
const { default: Image } = require("next/image");

const TarotCard = ({card}) => {



  return (
    <>
      <div className="flex flex-col items-center justify-center " key={card.id}>
          <h3 className="text-fuchsia-500 mt-2 text-3xl">{card.name}</h3>
          <Image className="shadow-xl shadow-fuchsia-500/25 my-4" width={199} height={340} src={card.img} alt={`carta ${card.name}`} />
          
        </div>
    </>
  );
};

export default TarotCard;
