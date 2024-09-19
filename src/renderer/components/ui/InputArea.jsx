import React, { useContext } from "react";
import { MyContext } from "../app";

export default function InputArea() {
  const { inputValue, setInputValue } = useContext(MyContext);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="mb-4">
      <textarea
        id="inputText"
        className="w-full h-96 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none transition duration-200 ease-in-out"
        value={inputValue}
        onChange={handleChange}
        placeholder="ここにテキストを入力してください"
        tabIndex="1"
      ></textarea>
    </div>
  );
}
