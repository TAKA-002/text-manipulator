import React from "react";
import ConvertionLabel from "./ConversionLabel";

export default function ConversionButtons(): React.JSX.Element {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
      <p className="font-semibold">変換方向：</p>
      <small className="text-gray-400">
        ※変換対象にチェックがついていない場合、変換はされません。
      </small>
      <div className="flex flex-wrap gap-4 mt-4">
        <ConvertionLabel convertWord="全角 → 半角" direction="fullToHalf" />
        <ConvertionLabel convertWord="半角 → 全角" direction="halfToFull" />
      </div>
    </div>
  );
}
