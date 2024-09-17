import React, { useContext } from "react";
import { MyContext } from "../app";

export default function OutputArea() {
  const [, , convertedValue] = useContext(MyContext);

  return (
    <div className="mb-4">
      <textarea
        id="outputText"
        readOnly
        placeholder="変換結果がここに表示されます"
        className="w-full h-80 p-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-700 focus:outline-none resize-none"
        value={convertedValue}
      ></textarea>
    </div>
  );
}
