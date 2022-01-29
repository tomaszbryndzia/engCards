import { FC } from "react";
import "./Card.scss";
import LineNumbers from "./LineNumbers";
import Tooltip from "../Tooltip";

const QuestionCard: FC = () => {
  return (
    <div className="card">
      <div className="card-front">
        <LineNumbers />
        <code>
          <Tooltip tooltipKey="slowo" />
          <div className="word text-center">
            <h2>slowo</h2>
            <input />
          </div>
        </code>
      </div>
    </div>
  );
};

export default QuestionCard;
