import React from "react";
import { useMyContext } from "../../hooks/useMyContext";
import { CaseConversionType } from "../../../types";

interface CaseConversionRadioProps {
  convertWord: string;
  conversion: CaseConversionType;
}

export default function CaseConversionRadio({
  convertWord,
  conversion
}: CaseConversionRadioProps): React.JSX.Element {
  const { caseConversionType, setCaseConversionType } = useMyContext();

  return (
    <label className="flex items-center space-x-3 cursor-pointer">
      <input
        type="radio"
        name="caseConversionType"
        value={conversion}
        className="form-radio text-blue-600 h-5 w-5"
        checked={caseConversionType === conversion}
        onChange={() => setCaseConversionType(conversion)}
        tabIndex={4}
      />
      <span className="text-gray-700">{convertWord}</span>
    </label>
  );
}
