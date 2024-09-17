import React from "react";

import InputArea from "./ui/InputArea";
import ConversionOptions from "./ui/ConversionOptions";
import ConversionButtons from "./ui/ConversionButtons";
import OutputArea from "./ui/OutputArea";
import CopyButton from "./ui/CopyButton";

export function Container() {
  return (
    <div className="container">
      <div className="column">
        <InputArea />
        <ConversionOptions />
        <ConversionButtons />
      </div>

      <div className="column">
        <OutputArea />
        <CopyButton />
      </div>
    </div>
  );
}
