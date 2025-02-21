import React from "react";
import icon from "../images/m_icon.png";

export function Heading() {
  return (
    <div className="flex items-center gap-3 justify-center mt-6">
      <figure className="aspect-square max-w-[min(14.9vw,56px)] h-full">
        <img
          className="w-full h-full"
          src={icon}
          width="400"
          height="400"
          alt="Text Manipulater App Logo"
        />
      </figure>
      <h1 className="text-[min(5.3vw,30px)] font-bold text-gray-600">Text Manipulater App</h1>
    </div>
  );
}
