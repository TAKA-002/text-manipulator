import React from "react";
import { useMyContext } from "../../hooks/useMyContext";

type ButtonIdType = "copyBtn" | "clearBtn";

interface ActionButtonProps {
  type: ButtonIdType;
  text: string;
  shortcut: string;
  tabIndex: number;
}

export default function ActionButton({
  type,
  text,
  shortcut,
  tabIndex,
}: ActionButtonProps): React.JSX.Element {
  const { handleClear, convertedValue, handleCopy } = useMyContext();

  const colorStyle: Record<ButtonIdType, string> = {
    copyBtn: "bg-gray-600 hover:bg-gray-700",
    clearBtn: "bg-red-500 hover:bg-red-600",
  };

  const handleClick: Record<ButtonIdType, () => void> = {
    copyBtn: () => handleCopy(convertedValue),
    clearBtn: () => handleClear(),
  };

  const pathData: Record<ButtonIdType, string> = {
    copyBtn:
      "M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3",
    clearBtn:
      "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
  };

  return (
    <div className="mt-4">
      <button
        id={type}
        className={`w-full ${colorStyle[type]} text-white font-bold py-2 px-4 rounded transition duration-300 flex items-center justify-center`}
        onClick={handleClick[type]}
        tabIndex={tabIndex}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={pathData[type]} />
        </svg>
        {text}
        {shortcut && `（${shortcut}）`}
      </button>
    </div>
  );
}
