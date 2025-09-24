import React from "react";
import { APP_VERSION } from "../util/constants";

export default function Version(): React.JSX.Element {
  return <span className="text-blue-600 font-bold drop-shadow-md text-xs">ver {APP_VERSION}</span>;
}
