import React, { useState, useRef, useEffect } from "react";
import { useMyContext } from "../../hooks/useMyContext";
import { ConvertSettings } from "../../../types";
import { useSettingsStorage } from "../../hooks/useSettingsStorage";
import { useSettingsRestore } from "../../hooks/useSettingsRestore";
import { getSettingsList } from "../util/process";
import SaveSettingsModal from "./SaveSettingsModal";

export default function SettingsDropdown(): React.JSX.Element {
  const componentRef = useRef<HTMLDivElement | null>(null);
  const myContext = useMyContext();
  const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>(false);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const { settingsData, saveSettings, setSettingsName, deleteSettings } = useSettingsStorage();
  const { restoreSettings, resetToDefaultSettings } = useSettingsRestore();

  const handleToggleDropdown = () => setIsOpenDropdown((prev) => !prev);

  /**
   * React がレンダリングを完了してブラウザに描画した後のタイミング
   * 「HTML 解析 → React レンダリング → DOM 更新 → 画面描画 → useEffect」という流れ
   */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      /**
       * event.target => mousedownイベントが発生した要素
       * componentRef.current => refの要素
       * Node: containsメソッド => 引数のNodeが子要素に存在するか。存在したらtrueを返す。
       *
       * refの要素が存在 && refの要素の子要素にクリックした要素が存在していない => refの要素の外側の要素
       */
      if (componentRef.current && !componentRef.current.contains(event.target as Node)) {
        setIsOpenDropdown(false);
      }
    };

    // ドロップダウンが開いているときだけ登録
    if (isOpenDropdown) {
      // documentの中でマウスをクリックした場合にそのeventを引数に持ってhandleClickOutsideが実行
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpenDropdown]);

  const clickSaveSettings = (): void => {
    saveSettings({
      replaceObject: myContext.replaceObject,
      isRemoveBr: myContext.isRemoveBr,
      isRemoveSpace: myContext.isRemoveSpace,
      conversionDirection: myContext.conversionDirection,
      isConversionAll: myContext.isConversionAll,
      isConversionEng: myContext.isConversionEng,
      isConversionNum: myContext.isConversionNum,
      isConversionSymbol: myContext.isConversionSymbol,
      isConversionSpace: myContext.isConversionSpace,
    });
    setIsOpenModal(false);
  };

  const handleClickResetSettings: React.MouseEventHandler<HTMLButtonElement> = (): void => {
    resetToDefaultSettings();
    setIsOpenDropdown(false);
  };

  const handleClickLoadSettings = (id: string): void => {
    const settingsList = getSettingsList();
    if (settingsList === null) return;

    const parsedData = JSON.parse(settingsList);
    const { settings } = parsedData.find((data: ConvertSettings) => data.id === id);
    restoreSettings(settings);
    setIsOpenDropdown(false);
  };

  return (
    <div ref={componentRef} className="relative">
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center inline-flex items-center"
        onClick={handleToggleDropdown}
      >
        設定管理
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isOpenDropdown && (
        <div className="z-10 absolute bg-white mt-2 divide-y divide-gray-100 rounded shadow-lg w-48 border">
          <ul className="py-2 text-sm text-gray-700">
            <li>
              <button
                className="block px-4 py-2 w-full text-left hover:bg-gray-100"
                onClick={handleClickResetSettings}
              >
                デフォルト設定
              </button>
            </li>

            {settingsData &&
              settingsData.map((li) => {
                const { id, name } = li;

                return (
                  <li key={id} className="flex items-center">
                    <button
                      id={id}
                      className="flex-1 block px-4 py-2 text-left hover:bg-gray-100"
                      onClick={() => handleClickLoadSettings(id)}
                    >
                      {name}
                    </button>
                    <button
                      className="px-2 py-2 text-red-500 hover:bg-red-100 rounded"
                      onClick={() => deleteSettings(id)}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </li>
                );
              })}

            <hr className="my-1" />

            <li>
              <button
                className="block px-4 py-2 w-full text-left hover:bg-gray-100 text-blue-600 font-medium"
                onClick={() => setIsOpenModal(true)}
              >
                現在の設定を保存...
              </button>
            </li>
          </ul>
        </div>
      )}

      {isOpenModal && (
        <SaveSettingsModal
          setIsOpenDropdown={setIsOpenDropdown}
          setIsOpenModal={setIsOpenModal}
          setSettingsName={setSettingsName}
          clickSaveSettings={clickSaveSettings}
        />
      )}
    </div>
  );
}
