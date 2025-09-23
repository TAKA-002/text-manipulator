import React from "react";

type FlexContainerProps = {
  children: React.ReactNode;
};

export function FlexContainer({ children }: FlexContainerProps) {
  return <div className="flex items-center justify-center gap-4">{children}</div>;
}
