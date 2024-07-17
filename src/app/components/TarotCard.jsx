const { default: Image } = require("next/image");
import CARDS from "../lib/Cards";
const TarotCard = () => {
  return (
    <>
      {CARDS.map(({ name, img, prediction, id }) => (
        <div className="flex flex-col items-center justify-center " key={id}>
          <h3 className="text-fuchsia-500 mt-2 text-3xl">{name}</h3>
          <Image className="shadow-xl shadow-fuchsia-500/25 my-4" width={199} height={340} src={img} alt={`carta ${name}`} />
          <p className="text-fuchsia-500  text-pretty text-center mx-60 mt-4 text-3sm pb-5 mb-4">{prediction}</p>
        </div>
      ))}
    </>
  );
};

export default TarotCard;
