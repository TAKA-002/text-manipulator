import React, { useContext } from "react";
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

  const handleClick = (event) => {
    if (event.target.value === "all") {
      setIsConvertionAll((prev) => !prev);
      setIsConvertionEng(false);
      setIsConvertionNum(false);
      setIsConvertionSpace(false);
    } else if (event.target.value === "alphabet") {
      setIsConvertionAll(false);
      setIsConvertionEng((prev) => !prev);
    } else if (event.target.value === "number") {
      setIsConvertionAll(false);
      setIsConvertionNum((prev) => !prev);
    } else if (event.target.value === "space") {
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
            onClick={handleClick}
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
            onClick={handleClick}
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
            onClick={handleClick}
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
            onClick={handleClick}
          />
          <span>スペース</span>
        </label>
      </div>
    </div>
  );
}
