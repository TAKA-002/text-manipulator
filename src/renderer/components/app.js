import React, { createContext, useCallback, useEffect, useState } from "react";
import { Heading } from "./heading";
import { Version } from "./version";
import { Container } from "./Container";
import {
  convertFullWidthToHalfWidth,
  convertHalfWidthToFullWidth,
  removeLineBreaksAndSpaces,
} from "./util/process";
import { moveFocusToInit } from "./util/operation";

export const MyContext = createContext();
const APP_VERSION = "1.1.2";

export function App() {
  const [inputValue, setInputValue] = useState(""); // 入力欄に入れられた値
  const [convertedValue, setConvertedValue] = useState(""); // 変換された値

  // 削除オプション
  const [isRemoveBr, setIsRemoveBr] = useState(false);
  const [isRemoveSpace, setIsRemoveSpace] = useState(false);

  // 変換方向オプション
  const [conversionDirection, setConversionDirection] = useState("fullToHalf");

  // 変換対象オプション
  const [isConversionAll, setIsConversionAll] = useState(true);
  const [isConversionEng, setIsConversionEng] = useState(false);
  const [isConversionNum, setIsConversionNum] = useState(false);
  const [isConversionSymbol, setIsConversionSymbol] = useState(false);
  const [isConversionSpace, setIsConversionSpace] = useState(false);

  useEffect(() => {
    let result = inputValue;

    // 削除
    const processed = removeLineBreaksAndSpaces(result, isRemoveBr, isRemoveSpace);

    // 全角半角切り替え
    if (conversionDirection === "fullToHalf") {
      if (isConversionAll) {
        result = convertFullWidthToHalfWidth(processed);
      } else {
        result = convertFullWidthToHalfWidth(processed, {
          convertAlphabet: isConversionEng,
          convertNumber: isConversionNum,
          convertSymbol: isConversionSymbol,
          convertSpace: isConversionSpace,
        });
      }
    } else if (conversionDirection === "halfToFull") {
      if (isConversionAll) {
        result = convertHalfWidthToFullWidth(processed);
      } else {
        result = convertHalfWidthToFullWidth(processed, {
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
    isRemoveBr,
    isRemoveSpace,
  ]);

  // コンポーネントがマウントされるたびに、keydownイベントリスナーが追加
  // handleCopyかconvertedValueが更新されると古いイベントリスナーが削除され、新しいイベントリスナーが登録される。
  // 使用しておわったイベントリスナーを削除する。
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter" && e.shiftKey) {
        e.preventDefault();
        handleCopy(convertedValue);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // クリーンアップ関数を返す
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleCopy, convertedValue]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Backspace" && e.shiftKey) {
        e.preventDefault();
        handleClear();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // クリーンアップ関数を返す
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleClear]);

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

    moveFocusToInit(); // インプットエリアにフォーカス
  }, []);

  const handleClear = useCallback(() => {
    setInputValue("");
    moveFocusToInit(); // インプットエリアにフォーカス
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
        isRemoveBr,
        setIsRemoveBr,
        isRemoveSpace,
        setIsRemoveSpace,
        handleCopy,
        handleClear,
      }}
    >
      <Heading />
      <Version version={APP_VERSION} />
      <Container />
    </MyContext.Provider>
  );
}
