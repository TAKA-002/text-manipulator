import React from "react";
// import { MyContext } from "../app";

export default function RemoveOptions() {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
      <p className="font-semibold mb-2">削除：</p>
      <div className="flex gap-4">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            name="conversionTarget"
            value="all"
            className="form-checkbox text-blue-600 rounded"
            // checked={isConversionAll}
            // onChange={handleChange}
            tabIndex="3"
          />
          <span>なし</span>
        </label>

        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            name="conversionTarget"
            value="alphabet"
            className="form-checkbox text-blue-600 rounded"
            // checked={isConversionEng}
            // onChange={handleChange}
            tabIndex="3"
          />
          <span>改行</span>
        </label>
      </div>
    </div>
  );
}
