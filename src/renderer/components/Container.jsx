import React, { createContext, useState } from "react";

import InputArea from "./ui/InputArea";
import ConvertionOptions from "./ui/ConvertionOptions";
import ConvertionButtons from "./ui/ConvertionButtons";
import OutputArea from "./ui/OutputArea";
import CopyButton from "./ui/CopyButton";

export const MyContext = createContext();

export function Container() {
  const [inputValue, setInputValue] = useState(""); // 入力欄に入れられた値
  const [convertedValue, setConvertedValue] = useState(""); // 変換された値
  const [convertionDirection, setConvertionDirection] = useState("fullToHalf");
  const [isConvertionAll, setIsConvertionAll] = useState(true);
  const [isConvertionEng, setIsConvertionEng] = useState(false);
  const [isConvertionNum, setIsConvertionNum] = useState(false);
  const [isConvertionSpace, setIsConvertionSpace] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        <MyContext.Provider
          value={[
            inputValue,
            setInputValue,
            convertedValue,
            setConvertedValue,
            convertionDirection,
            setConvertionDirection,
            isConvertionAll,
            setIsConvertionAll,
            isConvertionEng,
            setIsConvertionEng,
            isConvertionNum,
            setIsConvertionNum,
            isConvertionSpace,
            setIsConvertionSpace,
          ]}
        >
          <div className="w-full md:w-1/2 space-y-6">
            <InputArea />
            <ConvertionButtons />
            <ConvertionOptions />
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
