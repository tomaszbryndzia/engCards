import { FC } from "react";
import "./Tooltip.scss";
import infoIcon from "./../../assets/info_icon.svg";
import tooltipDatabase from "./tooltipDatabase";

interface IProps {
  tooltipKey: string;
}

const Tooltip: FC<IProps> = ({ tooltipKey }) => (
  <div className="info-wrap">
    <div className="text-right mb-2 d-inline-block info-icon">
      <img className="img-fluid" src={infoIcon} alt="info_icon" />
      <p className="info-content">{tooltipDatabase[tooltipKey]}</p>
    </div>
  </div>
);

export default Tooltip;
