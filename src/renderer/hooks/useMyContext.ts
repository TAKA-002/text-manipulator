import { useContext } from "react";
import { MyContext } from "../components/app";

export function useMyContext() {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error('useMyContext must be used within MyContext.Provider');
  }
  return context; // nullチェック済みのcontextを返す
}
