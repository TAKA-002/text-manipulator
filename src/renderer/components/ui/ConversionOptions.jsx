import React from "react";

export default function ConversionOptions() {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
      <p className="font-semibold mb-2">変換対象：</p>
      <div className="flex gap-4">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            name="conversionTarget"
            value="all"
            defaultChecked
            className="form-checkbox text-blue-600 rounded"
          />
          <span>すべて</span>
        </label>
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            name="conversionTarget"
            value="alphabet"
            className="form-checkbox text-blue-600 rounded"
          />
          <span>英字</span>
        </label>
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            name="conversionTarget"
            value="number"
            className="form-checkbox text-blue-600 rounded"
          />
          <span>数字</span>
        </label>
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            name="conversionTarget"
            value="space"
            className="form-checkbox text-blue-600 rounded"
          />
          <span>スペース</span>
        </label>
      </div>
    </div>
  );
}
