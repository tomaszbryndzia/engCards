import { FC } from "react";
import "./Card.scss";
import LineNumbers from "./LineNumbers";
import Tooltip from "../Tooltip";
import { IDatabase as IWord } from "../../database";
import WordSubmit from "./WordSubmit";

interface IProps {
  handleChangeWord: () => void;
  word: IWord;
}

const QuestionCard: FC<IProps> = ({
  word: { itemEn, itemPl, tooltip },
  handleChangeWord,
}) => {
  return (
    <div className="card">
      <div className="card-front">
        <LineNumbers />
        <code>
          <Tooltip tooltipText={tooltip} />
          <div className="word text-center">
            <h2>{itemPl}</h2>
            <WordSubmit
              translation={itemEn}
              handleChangeWord={handleChangeWord}
            />
          </div>
        </code>
      </div>
    </div>
  );
};

export default QuestionCard;
