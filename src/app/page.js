import Title from "./components/Title";
import { cinzel } from "./ui/fonts";
import TarotForm from "./components/TarotForm";

export default function Home() {
  return (
    <>
      <header className={cinzel.className}>
        <Title />
      </header>
      <TarotForm />
    </>
  );
}
