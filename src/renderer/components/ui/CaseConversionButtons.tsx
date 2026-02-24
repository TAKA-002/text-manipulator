import React from "react";
import CaseConversionRadio from "./CaseConversionRadio";
import { CASE_CONVERSION_TYPES } from "../util/constants";

export default function CaseConversionButtons(): React.JSX.Element {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
      <p className="font-semibold">テキストケース変更：</p>
      <div className="flex flex-wrap gap-4 mt-4">
        <CaseConversionRadio convertWord="変更なし" conversion={CASE_CONVERSION_TYPES.NO_CONVERT} />
        <CaseConversionRadio convertWord="大文字（ABC）" conversion={CASE_CONVERSION_TYPES.UPPER_CASE} />
        <CaseConversionRadio convertWord="小文字（abc）" conversion={CASE_CONVERSION_TYPES.LOWER_CASE} />
      </div>
    </div>
  );
}
