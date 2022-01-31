import { FC } from "react";
import QuestionCard from "../QuestionCard";
import database from "../../database";
import { randomNoRepeats } from "../../utils";

const CardQuiz: FC = (): JSX.Element => {
  const word = randomNoRepeats(database)();

  return <QuestionCard word={word} />;
};

export default CardQuiz;
