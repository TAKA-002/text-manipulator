import React, { createContext, useState } from "react";

import InputArea from "./ui/InputArea";
import ConversionOptions from "./ui/ConversionOptions";
import ConversionButtons from "./ui/ConversionButtons";
import OutputArea from "./ui/OutputArea";
import CopyButton from "./ui/CopyButton";

export const MyContext = createContext();

export function Container() {
  const [inputValue, setInputValue] = useState(""); // 入力欄に入れられた値
  const [convertedValue, setConvertedValue] = useState(""); // 変換された値
  const [conversionDirection, setConversionDirection] = useState("fullToHalf");
  const [isConversionAll, setIsConversionAll] = useState(true);
  const [isConversionEng, setIsConversionEng] = useState(false);
  const [isConversionNum, setIsConversionNum] = useState(false);
  const [isConversionSpace, setIsConversionSpace] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        <MyContext.Provider
          value={[
            inputValue,
            setInputValue,
            convertedValue,
            setConvertedValue,
            conversionDirection,
            setConversionDirection,
            isConversionAll,
            setIsConversionAll,
            isConversionEng,
            setIsConversionEng,
            isConversionNum,
            setIsConversionNum,
            isConversionSpace,
            setIsConversionSpace,
          ]}
        >
          <div className="w-full md:w-1/2 space-y-6">
            <InputArea />
            <ConversionButtons />
            <ConversionOptions />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <OutputArea />
            <CopyButton />
          </div>
        </MyContext.Provider>
      </div>
    </div>
  );
}
