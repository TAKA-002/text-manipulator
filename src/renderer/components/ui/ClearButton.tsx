import React from "react";
import { useMyContext } from "../../hooks/useMyContext";

export default function ClearButton(): React.JSX.Element {
  const { handleClear } = useMyContext();

  return (
    <div className="mt-4">
      <button
        id="clearBtn"
        className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300 flex items-center justify-center"
        tabIndex={4}
        onClick={handleClear}
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
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
        入力エリアクリア（Shift + BS）
      </button>
    </div>
  );
}
