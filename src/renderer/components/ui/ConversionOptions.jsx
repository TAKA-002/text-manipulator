import React, { useContext, useEffect } from "react";
import { MyContext } from "../app";

export default function ConversionOptions() {
  const [
    ,
    ,
    ,
    ,
    ,
    ,
    isConversionAll,
    setIsConversionAll,
    isConversionEng,
    setIsConversionEng,
    isConversionNum,
    setIsConversionNum,
    isConversionSpace,
    setIsConversionSpace,
  ] = useContext(MyContext);

  useEffect(() => {
    if (isConversionAll) {
      setIsConversionEng(true);
      setIsConversionNum(true);
      setIsConversionSpace(true);
    } else if (isConversionEng && isConversionNum && isConversionSpace) {
      setIsConversionAll(true);
    }
  }, [isConversionAll, isConversionEng, isConversionNum, isConversionSpace]);

  const handleChange = (event) => {
    const { value, checked } = event.target;

    if (value === "all") {
      setIsConversionAll(checked);
      setIsConversionEng(checked);
      setIsConversionNum(checked);
      setIsConversionSpace(checked);
    } else {
      const updateState = {
        alphabet: setIsConversionEng,
        number: setIsConversionNum,
        space: setIsConversionSpace,
      };
      updateState[value](checked);
      setIsConversionAll(false);
    }
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
      <p className="font-semibold mb-2">変換対象：</p>
      <div className="flex gap-4">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            name="conversionTarget"
            value="all"
            className="form-checkbox text-blue-600 rounded"
            checked={isConversionAll}
            onChange={handleChange}
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
          />
          <span>数字</span>
        </label>
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            name="conversionTarget"
            value="space"
            className="form-checkbox text-blue-600 rounded"
            checked={isConversionSpace}
            onChange={handleChange}
          />
          <span>スペース</span>
        </label>
      </div>
    </div>
  );
}
