import { Text } from "@radix-ui/themes";
import Phrase from "./Phrase";

interface PhrasesProps {
  phrases: any;
}

const Phrases = ({ phrases }: PhrasesProps) => {
  return (
    <>
      {phrases.map((phrase: any) => (
        <div key={phrase}>
          <Phrase phrase={phrase} />
        </div>
      ))}
    </>
  );
};

export default Phrases;
