import React, { useContext } from "react";
import { MyContext } from "../app";

export default function ConversionButtons() {
  const { conversionDirection, setConversionDirection } = useContext(MyContext);

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
      <p className="font-semibold">変換方向：</p>
      <small className="text-gray-400">
        ※変換対象にチェックがついていない場合、変換はされません。
      </small>
      <div className="flex gap-4 mt-4">
        <label className="flex items-center space-x-3 cursor-pointer">
          <input
            type="radio"
            name="conversionDirection"
            value="fullToHalf"
            className="form-radio text-blue-600 h-5 w-5"
            checked={conversionDirection === "fullToHalf"}
            onChange={(e) => setConversionDirection(e.target.value)}
            tabIndex="3"
          />
          <span className="text-gray-700">全角 → 半角</span>
        </label>
        <label className="flex items-center space-x-3 cursor-pointer">
          <input
            type="radio"
            name="conversionDirection"
            value="halfToFull"
            className="form-radio text-blue-600 h-5 w-5"
            checked={conversionDirection === "halfToFull"}
            onChange={(e) => setConversionDirection(e.target.value)}
            tabIndex="3"
          />
          <span className="text-gray-700">半角 → 全角</span>
        </label>
      </div>
    </div>
  );
}
