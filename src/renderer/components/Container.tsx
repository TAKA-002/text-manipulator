import React, { useEffect } from "react";

import InputArea from "./ui/InputArea";
import RemoveOptions from "./ui/RemoveOptions";
import ConversionOptions from "./ui/ConversionOptions";
import ConversionButtons from "./ui/ConversionButtons";
import OutputArea from "./ui/OutputArea";
import CopyButton from "./ui/CopyButton";
import ClearButton from "./ui/ClearButton";
import ReplaceOptions from "./ui/ReplaceOptions";
import { moveFocusToInit } from "./util/operation";

export function Container() {
  useEffect(() => {
    moveFocusToInit(); // インプットエリアにフォーカス
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2 space-y-6">
          <InputArea />
          <ReplaceOptions />
          <RemoveOptions />
          <ConversionButtons />
          <ConversionOptions />
        </div>
        <div className="w-full md:w-1/2 space-y-6">
          <OutputArea />
          <CopyButton />
          <ClearButton />
        </div>
      </div>
    </div>
  );
}
