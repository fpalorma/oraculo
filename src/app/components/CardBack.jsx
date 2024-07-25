const { default: Image } = require("next/image");

const CardBack = () => {
  return (
    <>
      <div className="flex justify-center gap-x-4 mx-2 md:gap-x-12">
        <Image
          className="shadow-xl shadow-fuchsia-500/25 my-4"
          width={199}
          height={340}
          src={"/TAROT/Tarot-back.jpg"}
          alt={`dorso de la carta de tarot`}
        />
        <Image
          className="shadow-xl shadow-fuchsia-500/25 my-4"
          width={199}
          height={340}
          src={"/TAROT/Tarot-back.jpg"}
          alt={`dorso de la carta de tarot`}
        />
        <Image
          className="shadow-xl shadow-fuchsia-500/25 my-4"
          width={199}
          height={340}
          src={"/TAROT/Tarot-back.jpg"}
          alt={`dorso de la carta de tarot`}
        />
      </div>
    </>
  );
};

export default CardBack;
