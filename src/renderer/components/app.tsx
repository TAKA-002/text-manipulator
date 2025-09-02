import React, { createContext, useCallback, useEffect, useState } from "react";
import { Heading } from "./heading";
import { Version } from "./version";
import { Container } from "./Container";
import {
  convertFullWidthToHalfWidth,
  convertHalfWidthToFullWidth,
  removeLineBreaksAndSpaces,
  performReplace,
  copyToClipboard,
} from "./util/process";
import { moveFocusToInit } from "./util/operation";
import { TYPING_DONE_INTERVAL } from "./util/constants";
import Toast from "./ui/Toast";
import { Footer } from "./footer";

type MyContextType = {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  convertedValue: string;
  setConvertedValue: React.Dispatch<React.SetStateAction<string>>;
  replaceObject: { from: string; to: string };
  setReplaceObject: React.Dispatch<
    React.SetStateAction<{
      from: string;
      to: string;
    }>
  >;
  conversionDirection: "fullToHalf" | "halfToFull";
  setConversionDirection: React.Dispatch<React.SetStateAction<"fullToHalf" | "halfToFull">>;
  isConversionAll: boolean;
  setIsConversionAll: React.Dispatch<React.SetStateAction<boolean>>;
  isConversionEng: boolean;
  setIsConversionEng: React.Dispatch<React.SetStateAction<boolean>>;
  isConversionNum: boolean;
  setIsConversionNum: React.Dispatch<React.SetStateAction<boolean>>;
  isConversionSymbol: boolean;
  setIsConversionSymbol: React.Dispatch<React.SetStateAction<boolean>>;
  isConversionSpace: boolean;
  setIsConversionSpace: React.Dispatch<React.SetStateAction<boolean>>;
  isRemoveBr: boolean;
  setIsRemoveBr: React.Dispatch<React.SetStateAction<boolean>>;
  isRemoveSpace: boolean;
  setIsRemoveSpace: React.Dispatch<React.SetStateAction<boolean>>;
  handleCopy: (textToCopy: string) => Promise<void>;
  handleClear: () => void;
};

export const MyContext = createContext<MyContextType | null>(null);

export function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [convertedValue, setConvertedValue] = useState<string>("");

  // 置換オプション
  const [replaceObject, setReplaceObject] = useState<{ from: string; to: string }>({
    from: "",
    to: "",
  });
  const [replacedValue, setReplacedValue] = useState<string>("");
  const [isReplace, setIsReplace] = useState<boolean>(false);

  // 削除オプション
  const [isRemoveBr, setIsRemoveBr] = useState<boolean>(false); // RemoveOptionコンポーネントで使用。改行を除去する状態か管理。trueならチェックボックスにchecked属性がある
  const [isRemoveSpace, setIsRemoveSpace] = useState<boolean>(false); // RemoveOptionコンポーネントで使用。スペースを除去する状態か管理。trueならチェックボックスにchecked属性がある

  // 変換方向オプション
  const [conversionDirection, setConversionDirection] = useState<"fullToHalf" | "halfToFull">(
    "fullToHalf"
  );

  // 変換対象オプション
  const [isConversionAll, setIsConversionAll] = useState<boolean>(false);
  const [isConversionEng, setIsConversionEng] = useState<boolean>(false);
  const [isConversionNum, setIsConversionNum] = useState<boolean>(false);
  const [isConversionSymbol, setIsConversionSymbol] = useState<boolean>(false);
  const [isConversionSpace, setIsConversionSpace] = useState<boolean>(false);

  // トースト通知
  const [toastKind, setToastKind] = useState<"success" | "failed" | "clear" | "">("");
  const [isToast, setIsToast] = useState<boolean>(false);

  // stateが変更されるたび再レンダリングされるが、コンポーネント内で定義された関数も一緒に再作成されるが、関数は変化がないので無駄。
  // だからuseCallbackをしようして、関数のメモ化を実施。
  const handleCopy = useCallback(async (textToCopy: string) => {
    const success = await copyToClipboard(textToCopy);
    if (success) {
      setToastKind("success");
      setIsToast(true);
    } else {
      setToastKind("failed");
      setIsToast(true);
    }
    moveFocusToInit();
  }, []);

  const handleClear = useCallback(() => {
    setIsReplace(false);
    setReplaceObject({ from: "", to: "" });
    setInputValue("");
    moveFocusToInit();
    setToastKind("clear");
    setIsToast(true);
  }, []);

  // テキスト置換
  // replaceObjectの変更が行われたら発火する
  useEffect(() => {
    // 置換が行われる場合
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

    // 置換が行われない場合、isReplaceがfalseになるとinputValueが置換される前の文字列のままになる
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
    const handleKeyDown = (e: KeyboardEvent) => {
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

  useEffect(() => {
    let timer;

    if (isToast) {
      timer = setTimeout(() => {
        setIsToast(false);
        setToastKind("");
      }, 1500);
    }

    return () => clearTimeout(timer);
  }, [isToast]);

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
      <Toast isToast={isToast} toastKind={toastKind} />
      <Heading />
      <Version />
      <Container />
      <Footer />
    </MyContext.Provider>
  );
}
