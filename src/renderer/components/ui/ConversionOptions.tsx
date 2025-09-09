import React, { useContext, useEffect } from "react";
import { MyContext } from "../app";
import ConversionCheckbox from "./ConversionCheckbox";

export default function ConversionOptions(): React.JSX.Element {
  const {
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
  } = useContext(MyContext);

  useEffect(() => {
    if (isConversionAll) {
      setIsConversionEng(true);
      setIsConversionNum(true);
      setIsConversionSymbol(true);
      setIsConversionSpace(true);
    } else if (isConversionEng && isConversionNum && isConversionSymbol && isConversionSpace) {
      setIsConversionAll(true);
    }
  }, [isConversionAll, isConversionEng, isConversionNum, isConversionSymbol, isConversionSpace]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value, checked } = event.target;

    switch (value) {
      case "all":
        setIsConversionAll(checked);
        setIsConversionEng(checked);
        setIsConversionNum(checked);
        setIsConversionSymbol(checked);
        setIsConversionSpace(checked);
        break;

      default:
        const updateState = {
          alphabet: setIsConversionEng,
          number: setIsConversionNum,
          symbol: setIsConversionSymbol,
          space: setIsConversionSpace,
        };
        updateState[value](checked);
        setIsConversionAll(false);
    }
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
      <p className="font-semibold">変換対象：</p>
      <small className="text-gray-400">
        ※改行・スペースの削除のみ行いたいときはチェックをすべて外します。
      </small>
      <div className="flex flex-wrap gap-4 mt-4">
        <ConversionCheckbox
          labelName="すべて"
          value="all"
          handler={handleChange}
          isConversion={isConversionAll}
        />

        <ConversionCheckbox
          labelName="英字"
          value="alphabet"
          handler={handleChange}
          isConversion={isConversionEng}
        />

        <ConversionCheckbox
          labelName="数字"
          value="number"
          handler={handleChange}
          isConversion={isConversionNum}
        />

        <ConversionCheckbox
          labelName="記号"
          value="symbol"
          handler={handleChange}
          isConversion={isConversionSymbol}
        />

        <ConversionCheckbox
          labelName="スペース"
          value="space"
          handler={handleChange}
          isConversion={isConversionSpace}
        />
      </div>
    </div>
  );
}
