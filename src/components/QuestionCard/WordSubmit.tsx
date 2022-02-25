import { FC, useEffect, useState } from "react";

interface IProps {
  translation: string;
  handleChangeWord: () => void;
}

const WordSubmit: FC<IProps> = ({ translation, handleChangeWord }) => {
  const [inputVal, setInputValue] = useState<string>("");
  const [isWordCorrect, setIsWordCorrect] = useState<boolean | undefined>(
    undefined
  );

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
  };

  const resetInput = () => {
    console.log("tu ?");
    setInputValue("");
    setIsWordCorrect(undefined);
  };

  const handleClick = () => {
    if (isWordCorrect) {
      handleChangeWord();
      resetInput();
    } else {
      setIsWordCorrect(false);
    }
  };

  useEffect(() => {
    if (translation === inputVal) {
      setIsWordCorrect(true);
    }
  }, [inputVal, translation]);

  return (
    <>
      <input onChange={handleInput} value={inputVal} />

      <button onClick={handleClick} className="submit-button">
        <span className="text">Next please...</span>
      </button>
    </>
  );
};

export default WordSubmit;
