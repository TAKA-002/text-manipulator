import { useState, useEffect } from "react";
import { ConvertSettings, SettingsType } from "../../types";
import {
  formatDateTime,
  createId,
  getSettingsList,
  getMergedSettings,
  setLocalStorage,
} from "../components/util/process";

export const useSettingsStorage = () => {
  const [settingsName, setSettingsName] = useState<string>("");
  const [settingsData, setSettingsData] = useState<ConvertSettings[] | null>(null);

  const getSettingsListFromStorage = () => {
    const settingsList = getSettingsList();
    if (settingsList === null) return null;
    return JSON.parse(settingsList)
  }

  // 初期読み込み
  useEffect(() => {
    const storageData = getSettingsListFromStorage()
    if (storageData) setSettingsData(storageData);
  }, []);

  const saveSettings = (curSettings: SettingsType): void => {
    if (settingsName.trim() === "") {
      alert("設定名を入力してください。");
      return;
    }

    const mergedSettings = getMergedSettings(getSettingsList(), {
      id: createId(),
      name: settingsName,
      settings: curSettings,
      createdAt: formatDateTime(Date.now()),
    });
    setLocalStorage(mergedSettings);
    setSettingsData(mergedSettings);
  }

  const deleteSettings = (id: string): void => {
    const data = getSettingsListFromStorage()
    if (!data) return;

    const deletedData = data.filter((d: ConvertSettings) => d.id !== id);
    setLocalStorage(deletedData);
    setSettingsData(deletedData);
  }

  return { settingsData, saveSettings, setSettingsName, deleteSettings }
}
