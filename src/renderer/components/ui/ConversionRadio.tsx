import React, { useContext } from "react";
import { MyContext } from "../app";
import { DirectionType } from "../../../types";

interface ConversionRadioProps {
  convertWord: string;
  direction: DirectionType;
}

export default function ConversionRadio({
  convertWord,
  direction,
}: ConversionRadioProps): React.JSX.Element {
  const { conversionDirection, setConversionDirection } = useContext(MyContext);

  return (
    <label className="flex items-center space-x-3 cursor-pointer">
      <input
        type="radio"
        name="conversionDirection"
        value={direction}
        className="form-radio text-blue-600 h-5 w-5"
        checked={conversionDirection === direction}
        onChange={() => setConversionDirection(direction)}
        tabIndex={4}
      />
      <span className="text-gray-700">{convertWord}</span>
    </label>
  );
}
