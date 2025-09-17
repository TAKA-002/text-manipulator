import React, { useState, useRef, useEffect, ReactEventHandler, FocusEventHandler } from "react";
import { useMyContext } from "../../hooks/useMyContext";
import { ConvertSettings } from "../../../types";
import {
  formatDateTime,
  createId,
  getSettingsList,
  getMergedSettings,
  setLocalStorage,
} from "../util/process";

export default function SettingsDropdown(): React.JSX.Element {
  const componentRef = useRef<HTMLDivElement | null>(null);
  const {
    replaceObject,
    setReplaceObject,
    isRemoveBr,
    setIsRemoveBr,
    isRemoveSpace,
    setIsRemoveSpace,
    conversionDirection,
    setConversionDirection,
    isConversionAll,
    setIsConversionAll,
    isConversionEng,
    setIsConversionEng,
    isConversionNum,
    setIsConversionNum,
    isConversionSymbol,
    setIsConversionSymbol,
    isConversionSpace,
    setIsConversionSpace,
  } = useMyContext();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [settingsData, setSettingsData] = useState<ConvertSettings[] | null>(null);

  const handleToggleDropdown = () => setIsOpen((prev) => !prev);

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
        setIsOpen(false);
      }
    };

    // ドロップダウンが開いているときだけ登録
    if (isOpen) {
      // documentの中でマウスをクリックした場合にそのeventを引数に持ってhandleClickOutsideが実行
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    const settingsList = getSettingsList();

    if (settingsList !== null) {
      const listData = JSON.parse(settingsList);
      setSettingsData(listData);
    }
  }, []);

  const handleClickSaveSettings = () => {
    const curSettings: ConvertSettings = {
      id: createId(),
      name: "test",
      settings: {
        replaceObject,
        isRemoveBr,
        isRemoveSpace,
        conversionDirection,
        isConversionAll,
        isConversionEng,
        isConversionNum,
        isConversionSymbol,
        isConversionSpace,
      },
      createdAt: formatDateTime(Date.now()),
    };

    const settingsList = getSettingsList();
    const mergedSettings = getMergedSettings(settingsList, curSettings);
    setLocalStorage(mergedSettings);
    setSettingsData(mergedSettings);
  };

  const handleClickResetSettings: ReactEventHandler = () => {
    // デフォルト設定
    setReplaceObject({ from: "", to: "" });
    setIsRemoveBr(false);
    setIsRemoveSpace(false);
    setConversionDirection("fullToHalf");
    setIsConversionAll(false);
    setIsConversionEng(false);
    setIsConversionNum(false);
    setIsConversionSymbol(false);
    setIsConversionSpace(false);
    setIsOpen(false);
  };

  const handleClickLoadSettings = (id: string) => {
    const settingsList = getSettingsList();
    if (settingsList === null) return;

    const parsedData = JSON.parse(settingsList);
    const { settings } = parsedData.find((data: ConvertSettings) => data.id === id);

    setReplaceObject(settings.replaceObject);
    setIsRemoveBr(settings.isRemoveBr);
    setIsRemoveSpace(settings.isRemoveSpace);
    setConversionDirection(settings.conversionDirection);
    setIsConversionAll(settings.isConversionAll);
    setIsConversionEng(settings.isConversionEng);
    setIsConversionNum(settings.isConversionNum);
    setIsConversionSymbol(settings.isConversionSymbol);
    setIsConversionSpace(settings.isConversionSpace);
    setIsOpen(false);
  };

  const handleClickDeleteSettings = (id: string) => {
    const settingsList = getSettingsList();
    if (settingsList === null) return;

    const parsedData = JSON.parse(settingsList);
    const deletedData = parsedData.filter((data: ConvertSettings) => data.id !== id);
    setLocalStorage(deletedData);
    setSettingsData(deletedData);
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

      {isOpen && (
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
                      onClick={() => handleClickDeleteSettings(id)}
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
                onClick={handleClickSaveSettings}
              >
                現在の設定を保存...
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
