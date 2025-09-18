import React from "react";

export default function SaveSettingsModal() {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-80">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">名前を入力してください</h2>

        <input
          type="text"
          placeholder="保存名"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex justify-end gap-3 mt-6">
          <button className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300">
            キャンセル
          </button>
          <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
