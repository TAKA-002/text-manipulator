import React from "react";
import { Info } from "lucide-react";

export default function About(): React.JSX.Element {
  return (
    <span className="cursor-pointer flex items-center gap-1 text-blue-600 font-bold drop-shadow-md text-xs hover:text-blue-800 hover:scale-110 transition-all duration-200 ease-in-out">
      <Info size={16} />
      About
    </span>
  );
}
