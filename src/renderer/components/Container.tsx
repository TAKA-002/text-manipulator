import React, { useEffect } from "react";

import InputArea from "./ui/InputArea";
import RemoveOptions from "./ui/RemoveOptions";
import ConversionOptions from "./ui/ConversionOptions";
import ConversionButtons from "./ui/ConversionButtons";
import OutputArea from "./ui/OutputArea";
import ActionButton from "./ui/ActionButton";
import ReplaceOptions from "./ui/ReplaceOptions";
import { moveFocusToInit } from "./util/operation";

export function Container(): React.JSX.Element {
  useEffect(() => {
    moveFocusToInit();
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
          <ActionButton type="copyBtn" text="コピー" shortcut="Shift + Enter" tabIndex={4} />
          <ActionButton
            type="clearBtn"
            text="入力エリアクリア"
            shortcut="Shift + BS"
            tabIndex={4}
          />
        </div>
      </div>
    </div>
  );
}
