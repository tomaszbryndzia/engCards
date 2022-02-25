import { FC, useState } from "react";
import QuestionCard from "../QuestionCard";
import database from "../../database";
import { randomNoRepeats } from "../../utils";

const CardQuiz: FC = (): JSX.Element => {
  const [word, setWord] = useState(randomNoRepeats(database)());

  const handleChangeWord = () => {
    const randomWord = randomNoRepeats(database)();
    setWord(randomWord);
  };

  return <QuestionCard word={word} handleChangeWord={handleChangeWord} />;
};

export default CardQuiz;
