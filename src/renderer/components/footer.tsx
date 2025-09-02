import React from "react";
import icon from "../images/m_icon.png";

export function Footer(): React.JSX.Element {
  return (
    <footer className="flex items-center justify-center gap-3 mt-12 py-3 bg-neutral-300 text-stone-500">
      <figure className="aspect-square max-w-[min(3.7vw,28px)] h-full">
        <img
          className="w-full h-full"
          src={icon}
          width="400"
          height="400"
          alt="Text Manipulater App Logo"
        />
      </figure>
      <small className="text-[min(3.2vw,12px)]">
        Copyright © TAKAYUKI MIURA {new Date().getFullYear()} - All right reserved
      </small>
    </footer>
  );
}
