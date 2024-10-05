import React from "react";

export default function ReplaceOptions() {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
      <p className="font-semibold">置換：</p>
      <small className="text-gray-400">※「変更後の文字列入力欄」を未入力のままにすると削除されます。</small>
      <div className="flex items-center mt-4">
        <input type="text" name="replaceOption" className="w-2/5 rounded-lg" placeholder="※変更したい文字列を入力" />
        <span className="w-1/5 text-center">⇒</span>
        <input type="text" name="replaceOption" className="w-2/5 rounded-lg" placeholder="※変更後の文字列を入力" />
      </div>
    </div>
  );
}
