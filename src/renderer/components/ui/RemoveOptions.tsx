import React from "react";
import { useMyContext } from "../../hooks/useMyContext";

// 削除用のチェックボックスのコンポーネント
// チェックボックスにチェックを入れるとそのinputのvalue値によって、改行、スペースを削除するかstateにbool値をもたせることで判断できるようにしている
export default function RemoveOptions(): React.JSX.Element {
  const { isRemoveBr, setIsRemoveBr, isRemoveSpace, setIsRemoveSpace } = useMyContext();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value, checked } = e.target;
    switch (value) {
      case "br":
        setIsRemoveBr(checked);
        break;

      case "space":
        setIsRemoveSpace(checked);
        break;

      default:
        break;
    }
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
      <p className="font-semibold">削除：</p>
      <small className="text-gray-400">
        ※改行・スペースの削除をしない場合はチェックは不要です。
      </small>
      <div className="flex flex-wrap gap-4 mt-4">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            name="removeOption"
            value="br"
            className="form-checkbox text-blue-600 rounded"
            checked={isRemoveBr}
            onChange={handleChange}
            tabIndex={3}
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
            tabIndex={3}
          />
          <span>スペース</span>
        </label>
      </div>
    </div>
  );
}
