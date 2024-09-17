import React from "react";

export default function InputArea() {
  return (
    <div className="mb-4">
      <textarea
        id="inputText"
        placeholder="ここにテキストを入力してください"
        className="w-full h-80 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none transition duration-200 ease-in-out"
      ></textarea>
    </div>
  );
}
