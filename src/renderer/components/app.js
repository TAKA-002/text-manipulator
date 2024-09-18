import React, { createContext, useEffect, useState } from "react";
import { Heading } from "./heading";
import { Container } from "./Container";

import { convertFullWidthToHalfWidth, convertHalfWidthToFullWidth } from "./util/process";

export const MyContext = createContext();

export function App() {
  const [inputValue, setInputValue] = useState(""); // 入力欄に入れられた値
  const [convertedValue, setConvertedValue] = useState(""); // 変換された値
  const [conversionDirection, setConversionDirection] = useState("fullToHalf");
  const [isConversionAll, setIsConversionAll] = useState(true);
  const [isConversionEng, setIsConversionEng] = useState(false);
  const [isConversionNum, setIsConversionNum] = useState(false);
  const [isConversionSymbol, setIsConversionSymbol] = useState(false);
  const [isConversionSpace, setIsConversionSpace] = useState(false);

  useEffect(() => {
    let result = inputValue;
    if (conversionDirection === "fullToHalf") {
      if (isConversionAll) {
        result = convertFullWidthToHalfWidth(inputValue);
      } else {
        result = convertFullWidthToHalfWidth(inputValue, {
          convertAlphabet: isConversionEng,
          convertNumber: isConversionNum,
          convertSymbol: isConversionSymbol,
          convertSpace: isConversionSpace,
        });
      }
    } else if (conversionDirection === "halfToFull") {
      if (isConversionAll) {
        result = convertHalfWidthToFullWidth(inputValue);
      } else {
        result = convertHalfWidthToFullWidth(inputValue, {
          convertAlphabet: isConversionEng,
          convertNumber: isConversionNum,
          convertSymbol: isConversionSymbol,
          convertSpace: isConversionSpace,
        });
      }
    }

    setConvertedValue(result);
  }, [
    inputValue,
    conversionDirection,
    isConversionAll,
    isConversionEng,
    isConversionNum,
    isConversionSymbol,
    isConversionSpace,
  ]);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(convertedValue)
      .then(() => {
        alert("テキストがクリップボードにコピーされました。");
      })
      .catch((err) => {
        console.error("コピーに失敗しました:", err);
        alert("コピーに失敗しました。");
      });

    // ボタンをクリックしたらフォーカスをインプットエリアに移動
    const inputElement = document.getElementById("inputText");
    if (inputElement) {
      inputElement.focus();
    }
  };

  return (
    <MyContext.Provider
      value={{
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
        isConversionSymbol,
        setIsConversionSymbol,
        isConversionSpace,
        setIsConversionSpace,
      }}
    >
      <Heading />
      <Container />
    </MyContext.Provider>
  );
}
