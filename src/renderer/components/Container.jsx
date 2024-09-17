import React from "react";

import InputArea from "./ui/InputArea";
import ConversionOptions from "./ui/ConversionOptions";
import ConversionButtons from "./ui/ConversionButtons";
import OutputArea from "./ui/OutputArea";
import CopyButton from "./ui/CopyButton";

export function Container() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2 space-y-6">
          <InputArea />
          <ConversionButtons />
          <ConversionOptions />
        </div>
        <div className="w-full md:w-1/2 space-y-6">
          <OutputArea />
          <CopyButton />
        </div>
      </div>
    </div>
  );
}
