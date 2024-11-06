import React, { useContext, useEffect } from "react";
import { MyContext } from "../app";

export default function ConversionOptions() {
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

  const handleChange = (event) => {
    const { value, checked } = event.target;

    if (value === "all") {
      setIsConversionAll(checked);
      setIsConversionEng(checked);
      setIsConversionNum(checked);
      setIsConversionSymbol(checked);
      setIsConversionSpace(checked);
    } else {
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
      <div className="flex gap-4 mt-4">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            name="conversionTarget"
            value="all"
            className="form-checkbox text-blue-600 rounded"
            checked={isConversionAll}
            onChange={handleChange}
            tabIndex="5"
          />
          <span>すべて</span>
        </label>

        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            name="conversionTarget"
            value="alphabet"
            className="form-checkbox text-blue-600 rounded"
            checked={isConversionEng}
            onChange={handleChange}
            tabIndex="5"
          />
          <span>英字</span>
        </label>

        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            name="conversionTarget"
            value="number"
            className="form-checkbox text-blue-600 rounded"
            checked={isConversionNum}
            onChange={handleChange}
            tabIndex="5"
          />
          <span>数字</span>
        </label>

        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            name="conversionTarget"
            value="symbol"
            className="form-checkbox text-blue-600 rounded"
            checked={isConversionSymbol}
            onChange={handleChange}
            tabIndex="5"
          />
          <span>記号</span>
        </label>

        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            name="conversionTarget"
            value="space"
            className="form-checkbox text-blue-600 rounded"
            checked={isConversionSpace}
            onChange={handleChange}
            tabIndex="5"
          />
          <span>スペース</span>
        </label>
      </div>
    </div>
  );
}
