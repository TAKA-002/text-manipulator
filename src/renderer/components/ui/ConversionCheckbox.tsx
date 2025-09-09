import React from "react";

interface ConversionCheckboxProps {
  labelName: string;
  value: string;
  handler: React.ChangeEventHandler<HTMLInputElement>;
  isConversion: boolean;
}

export default function ConversionCheckbox({
  labelName,
  value,
  handler,
  isConversion,
}: ConversionCheckboxProps): React.JSX.Element {
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input
        type="checkbox"
        name="conversionTarget"
        value={value}
        className="form-checkbox text-blue-600 rounded"
        checked={isConversion}
        onChange={handler}
        tabIndex={5}
      />
      <span>{labelName}</span>
    </label>
  );
}
