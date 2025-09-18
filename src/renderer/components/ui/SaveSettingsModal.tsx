import React from "react";

export default function SaveSettingsModal({
  setIsOpenDropdown,
  setIsOpenModal,
  setSettingsName,
  handleClickSaveSettings,
}: {
  setIsOpenDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSettingsName: React.Dispatch<React.SetStateAction<string>>;
  handleClickSaveSettings: React.MouseEventHandler;
}): React.JSX.Element {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const name = event.target.value;
    setSettingsName(name);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-80">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">設定名を入力してください</h2>

        <input
          type="text"
          placeholder="設定名"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
        />

        <div className="flex justify-end gap-3 mt-6">
          <button
            className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300"
            onClick={() => {
              setIsOpenDropdown(false);
              setIsOpenModal(false);
            }}
          >
            キャンセル
          </button>
          <button
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            onClick={handleClickSaveSettings}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
