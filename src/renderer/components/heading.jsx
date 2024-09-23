import React from "react";
import icon from "../images/m_icon.png";

export function Heading() {
  return (
    <div className="flex items-center gap-3 justify-center mt-6">
      <figure className="w-14 h-auto">
        <img
          className="w-full h-auto"
          src={icon}
          width="400"
          height="400"
          alt="Text Manipulater App Logo"
        />
      </figure>
      <h1 className="text-3xl font-bold text-gray-600">Text Manipulater App</h1>
    </div>
  );
}
