import React from "react";
import { APP_VERSION } from "./util/constants";

export function Version(): React.JSX.Element {
  return (
    <p className="text-center text-blue-600 font-bold drop-shadow-md text-xs">
      version {APP_VERSION}
    </p>
  );
}
