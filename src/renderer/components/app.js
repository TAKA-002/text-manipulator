import React, { createContext, useCallback, useEffect, useState } from "react";
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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter" && e.shiftKey) {
        e.preventDefault();
        handleCopy(convertedValue);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
  }, [handleCopy, convertedValue]);

  // stateが変更されるたび再レンダリングされる。
  // コンポーネント内で定義された関数も一緒に再作成されるが、関数は変化がないので無駄。
  // だからuseCallbackをしようして、関数のメモ化を実施。
  const handleCopy = useCallback((textToCopy) => {
    navigator.clipboard
      .writeText(textToCopy)
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
  }, []);

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
        handleCopy,
      }}
    >
      <Heading />
      <Container />
    </MyContext.Provider>
  );
}
