import React from "react";
import { useMyContext } from "../../hooks/useMyContext";

export default function OutputArea(): React.JSX.Element {
  const { convertedValue } = useMyContext();

  return (
    <div className="mb-4">
      <textarea
        id="outputText"
        readOnly
        placeholder="結果がここに表示されます"
        className="w-full min-h-[360px] p-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-700 focus:outline-none resize-none"
        style={{ fieldSizing: "content" } as any}
        value={convertedValue}
      ></textarea>
    </div>
  );
}
