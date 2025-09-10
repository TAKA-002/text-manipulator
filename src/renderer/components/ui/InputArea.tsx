import React from "react";
import { useMyContext } from "../../hooks/useMyContext";

export default function InputArea(): React.JSX.Element {
  const { inputValue, setInputValue } = useMyContext();

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="mb-4">
      <textarea
        id="inputText"
        className="w-full min-h-[360px] p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none transition duration-200 ease-in-out"
        style={{ fieldSizing: "content" } as any}
        value={inputValue}
        onChange={handleChange}
        placeholder="ここにテキストを入力してください"
        tabIndex={1}
      ></textarea>
    </div>
  );
}
