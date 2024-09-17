import React from "react";

export default function ConversionButtons() {
  return (
    <div className="flex space-x-4">
      <button
        id="fullToHalfBtn"
        className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
      >
        全角→半角
      </button>
      <button
        id="halfToFullBtn"
        className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300"
      >
        半角→全角
      </button>
    </div>
  );
}
