import { FC } from "react";
import "./Card.scss";
import LineNumbers from "./LineNumbers";
import Tooltip from "../Tooltip";
import { IDatabase as IWord } from "../../database";
import Input from "./Input";

interface IProps {
  word: IWord;
}

const QuestionCard: FC<IProps> = ({ word: { itemEn, itemPl, tooltip } }) => {
  return (
    <div className="card">
      <div className="card-front">
        <LineNumbers />
        <code>
          <Tooltip tooltipText={tooltip} />
          <div className="word text-center">
            <h2>{itemPl}</h2>
            <Input />
          </div>
        </code>
      </div>
    </div>
  );
};

export default QuestionCard;
