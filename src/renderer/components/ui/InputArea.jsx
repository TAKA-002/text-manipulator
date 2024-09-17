import React, { useContext } from "react";
import { MyContext } from "../Container";

export default function InputArea() {
  const [inputValue, setInputValue] = useContext(MyContext);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="mb-4">
      <textarea
        id="inputText"
        onChange={handleChange}
        placeholder="ここにテキストを入力してください"
        className="w-full h-80 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none transition duration-200 ease-in-out"
      ></textarea>
    </div>
  );
}
