import React from "react";

export default function ConversionOptions() {
  return (
    <div className="options">
      <p>変換対象：</p>
      <label>
        <input type="radio" name="conversionTarget" value="all" checked />
        すべて
      </label>
      <label>
        <input type="radio" name="conversionTarget" value="alphabet" />
        英字
      </label>
      <label>
        <input type="radio" name="conversionTarget" value="number" />
        数字
      </label>
      <label>
        <input type="radio" name="conversionTarget" value="space" />
        スペース
      </label>
    </div>
  );
}
