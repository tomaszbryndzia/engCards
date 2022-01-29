import { FC } from "react";
import times from "lodash-es/times";

const LineNumbers: FC = () => {
  const numbers: JSX.Element[] = times(9, (i) => {
    return <div key={`line-${i}`}>{i}</div>;
  });

  return <div className="line-numbers">{numbers}</div>;
};

export default LineNumbers;
