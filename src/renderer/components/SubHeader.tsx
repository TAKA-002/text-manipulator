import React from "react";

type SubHeaderProps = {
  children: React.ReactNode;
};

export default function SubHeader({ children }: SubHeaderProps) {
  return <div className="flex items-center justify-center gap-4">{children}</div>;
}
