import React, { useContext } from "react";
import { MyContext } from "../Container";

export default function CopyButton() {
  const [, , convertedValue] = useContext(MyContext);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(convertedValue)
      .then(() => {
        alert("テキストがクリップボードにコピーされました。");
      })
      .catch((err) => {
        console.error("コピーに失敗しました:", err);
        alert("コピーに失敗しました。");
      });
  };

  return (
    <div className="mt-4">
      <button
        id="copyBtn"
        onClick={handleCopy}
        className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition duration-300 flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
          />
        </svg>
        コピー
      </button>
    </div>
  );
}
