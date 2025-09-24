import React, { useState } from "react";
import { Info } from "lucide-react";
import AboutModal from "../ui/AboutModal";

export default function About(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <span
        className="cursor-pointer flex items-center gap-1 text-red-600 font-bold drop-shadow-md text-xs hover:text-red-800 hover:scale-110 transition-all duration-200 ease-in-out"
        onClick={() => setIsOpen(true)}
      >
        <Info size={16} />
        About
      </span>

      {isOpen && <AboutModal setIsOpen={setIsOpen} />}
    </>
  );
}
