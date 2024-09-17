import React, { useContext, useEffect } from "react";
import { MyContext } from "../Container";

export default function ConvertionOptions() {
  const [
    ,
    ,
    ,
    ,
    ,
    ,
    isConvertionAll,
    setIsConvertionAll,
    isConvertionEng,
    setIsConvertionEng,
    isConvertionNum,
    setIsConvertionNum,
    isConvertionSpace,
    setIsConvertionSpace,
  ] = useContext(MyContext);

  useEffect(() => {
    if (isConvertionAll) {
      setIsConvertionEng(true);
      setIsConvertionNum(true);
      setIsConvertionSpace(true);
    }
    if (isConvertionEng && isConvertionNum && isConvertionSpace) {
      setIsConvertionAll(true);
    }
  }, [isConvertionAll, isConvertionEng, isConvertionNum, isConvertionSpace]);

  const handleChange = (event) => {
    const { value, checked } = event.target;

    if (value === "all") {
      setIsConvertionAll(checked);
      checked ? setIsConvertionEng(true) : setIsConvertionEng(false);
      checked ? setIsConvertionNum(true) : setIsConvertionNum(false);
      checked ? setIsConvertionSpace(true) : setIsConvertionSpace(false);
    } else if (value === "alphabet") {
      setIsConvertionAll(false);
      setIsConvertionEng((prev) => !prev);
    } else if (value === "number") {
      setIsConvertionAll(false);
      setIsConvertionNum((prev) => !prev);
    } else if (value === "space") {
      setIsConvertionAll(false);
      setIsConvertionSpace((prev) => !prev);
    }
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
      <p className="font-semibold mb-2">変換対象：</p>
      <div className="flex gap-4">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            name="convertionTarget"
            value="all"
            className="form-checkbox text-blue-600 rounded"
            checked={isConvertionAll}
            onChange={handleChange}
          />
          <span>すべて</span>
        </label>
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            name="convertionTarget"
            value="alphabet"
            className="form-checkbox text-blue-600 rounded"
            checked={isConvertionEng}
            onChange={handleChange}
          />
          <span>英字</span>
        </label>
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            name="convertionTarget"
            value="number"
            className="form-checkbox text-blue-600 rounded"
            checked={isConvertionNum}
            onChange={handleChange}
          />
          <span>数字</span>
        </label>
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            name="convertionTarget"
            value="space"
            className="form-checkbox text-blue-600 rounded"
            checked={isConvertionSpace}
            onChange={handleChange}
          />
          <span>スペース</span>
        </label>
      </div>
    </div>
  );
}
