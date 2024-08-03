import { useTypewriter } from "../hooks/useTypewriter";

const Typewriter = ({ text, speed }) => {
    const displayText = useTypewriter(text, speed);
  
    return <p className="text-fuchsia-500  text-pretty text-center mx-4 mt-2 pb-2 md:mx-60 md:mt-4 md:text-lg md:pb-10">{displayText}</p>;
  };
  
  export default Typewriter;