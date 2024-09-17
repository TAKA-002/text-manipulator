import React from "react";

export default function OutputArea() {
  return (
    <div className="mb-4">
      <textarea
        id="outputText"
        readOnly
        placeholder="変換結果がここに表示されます"
        className="w-full h-80 p-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-700 focus:outline-none resize-none"
      ></textarea>
    </div>
  );
}
