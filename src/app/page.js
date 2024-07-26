import Hello from "./components/Hello";
import TarotCardContainer from "./components/TarotCardContainer";
import { cinzel, nunito } from "./ui/fonts";



export default function Home() {
  
  return (
    <>
    <header className={cinzel.className}>
      <Hello />
    </header>
      <TarotCardContainer> </TarotCardContainer>
    </>
  );
}
