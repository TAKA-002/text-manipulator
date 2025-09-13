import React, { useState } from "react";

export default function SettingsDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center inline-flex items-center"
        onClick={handleToggleDropdown}
      >
        設定管理
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="z-10 absolute bg-white mt-2 divide-y divide-gray-100 rounded shadow-lg w-48 border">
          <ul className="py-2 text-sm text-gray-700">
            <li>
              <button className="block px-4 py-2 w-full text-left hover:bg-gray-100">
                デフォルト設定
              </button>
            </li>
            <li>
              <button className="block px-4 py-2 w-full text-left hover:bg-gray-100">
                コーディング用
              </button>
            </li>
            <li>
              <button className="block px-4 py-2 w-full text-left hover:bg-gray-100">
                文書整形用
              </button>
            </li>
            <hr className="my-1" />
            <li>
              <button className="block px-4 py-2 w-full text-left hover:bg-gray-100 text-blue-600 font-medium">
                現在の設定を保存...
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
