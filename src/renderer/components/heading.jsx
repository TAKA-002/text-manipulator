import React from "react";
import icon from "../images/m_icon.png";

export function Heading() {
  return (
    <div>
      <img src={icon} width="400" height="400" alt="" />
      <h1 className="text-3xl font-bold text-center text-gray-600 mt-6">Text Manipulation App</h1>
    </div>
  );
}
