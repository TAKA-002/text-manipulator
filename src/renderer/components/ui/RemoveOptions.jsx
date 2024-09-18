import React, { useContext } from "react";
import { MyContext } from "../app";

export default function RemoveOptions() {
  const { isRemoveBr, setIsRemoveBr, isRemoveSpace, setIsRemoveSpace } = useContext(MyContext);

  const handleChange = (e) => {
    const { value, checked } = e.target;
    if (value === "br") {
      setIsRemoveBr(checked);
    } else if (value === "space") {
      setIsRemoveSpace(checked);
    }
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
      <p className="font-semibold mb-2">削除：</p>
      <div className="flex gap-4">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            name="removeOption"
            value="br"
            className="form-checkbox text-blue-600 rounded"
            checked={isRemoveBr}
            onChange={handleChange}
            tabIndex="2"
          />
          <span>改行</span>
        </label>

        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            name="removeOption"
            value="space"
            className="form-checkbox text-blue-600 rounded"
            checked={isRemoveSpace}
            onChange={handleChange}
            tabIndex="2"
          />
          <span>スペース</span>
        </label>
      </div>
    </div>
  );
}
