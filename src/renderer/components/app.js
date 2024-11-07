import React, { createContext, useCallback, useEffect, useState } from "react";
import { Heading } from "./heading";
import { Version } from "./version";
import { Container } from "./Container";
import {
  convertFullWidthToHalfWidth,
  convertHalfWidthToFullWidth,
  removeLineBreaksAndSpaces,
  performReplace,
} from "./util/process";
import { moveFocusToInit } from "./util/operation";
import { TYPING_DONE_INTERVAL } from "./util/constants";

export const MyContext = createContext();

export function App() {
  const [inputValue, setInputValue] = useState(""); // 入力欄に入れられた値を格納するためのstate
  const [convertedValue, setConvertedValue] = useState(""); // 変換された値を格納するためのstate

  // 置換オプション
  const [replaceObject, setReplaceObject] = useState({ from: "", to: "" }); // fromには置換対象の文字列を格納して、toには、変換後の文字列を格納する
  const [replacedValue, setReplacedValue] = useState(""); // 置換した文字列を格納する
  const [isReplace, setIsReplace] = useState(false); // 置換を実施したか管理

  // 削除オプション
  const [isRemoveBr, setIsRemoveBr] = useState(false); // RemoveOptionコンポーネントで使用。改行を除去する状態かをstateにbool値を持たせて管理する。trueならチェックボックスにchecked属性がある
  const [isRemoveSpace, setIsRemoveSpace] = useState(false); // RemoveOptionコンポーネントで使用。スペースを除去する状態かをstateにbool値を持たせて管理する。trueならチェックボックスにchecked属性がある

  // 変換方向オプション
  const [conversionDirection, setConversionDirection] = useState("fullToHalf");

  // 変換対象オプション
  const [isConversionAll, setIsConversionAll] = useState(false);
  const [isConversionEng, setIsConversionEng] = useState(false);
  const [isConversionNum, setIsConversionNum] = useState(false);
  const [isConversionSymbol, setIsConversionSymbol] = useState(false);
  const [isConversionSpace, setIsConversionSpace] = useState(false);

  // テキスト置換
  // replaceObjectの変更が行われたら発火する
  useEffect(() => {
    // 置換が行われる場合がこちら。
    if (
      (replaceObject.from !== "" && replaceObject.to !== "") ||
      (replaceObject.from !== "" && replaceObject.to === "")
    ) {
      const newTimer = setTimeout(() => {
        setReplacedValue(performReplace(inputValue, replaceObject));
        setIsReplace(true);
      }, TYPING_DONE_INTERVAL);
      return () => clearTimeout(newTimer);
    }

    // 置換が行われない場合がこちらで、isReplaceがfalseになるとinputValueが置換される前の文字列のままになる
    else if (
      (replaceObject.from === "" && replaceObject.to !== "") ||
      (replaceObject.from === "" && replaceObject.to === "")
    ) {
      setIsReplace(false);
    }
  }, [replaceObject]);

  useEffect(() => {
    let result = isReplace ? replacedValue : inputValue;

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
    replacedValue,
    isReplace,
    replaceObject,
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
  // 依存配列が更新されると古いイベントリスナーが削除され、新しいイベントリスナーが登録される。
  // 使用しておわったイベントリスナーを削除する。
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.shiftKey) {
        if (e.key === "Enter") {
          e.preventDefault();
          handleCopy(convertedValue);
        } else if (e.key === "Backspace") {
          e.preventDefault();
          handleClear();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // クリーンアップ関数：コンポーネントのアンマウント時やdependenciesが変更されたときに実行
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleCopy, convertedValue, handleClear]);

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
    setIsReplace(false); // replaceしないフラグへ戻す
    setReplaceObject({ from: "", to: "" }); // 置換入力欄をデフォルトに戻す
    setInputValue(""); // 入力欄を空欄にする
    moveFocusToInit(); // インプットエリアにフォーカス
  }, []);

  return (
    <MyContext.Provider
      value={{
        inputValue,
        setInputValue,
        convertedValue,
        setConvertedValue,
        replaceObject,
        setReplaceObject,
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
      <Version />
      <Container />
    </MyContext.Provider>
  );
}
