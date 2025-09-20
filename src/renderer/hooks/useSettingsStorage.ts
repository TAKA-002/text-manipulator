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

  // 初期読み込み
  useEffect(() => {
    const settingsList = getSettingsList();

    if (settingsList !== null) {
      const listData = JSON.parse(settingsList);
      setSettingsData(listData);
    }
  }, []);

  const saveSettings = (curSettings: SettingsType): void => {

    if (settingsName.trim() === "") {
      alert("設定名を入力してください。");
      return;
    }

    const convertSettings: ConvertSettings = {
      id: createId(),
      name: settingsName,
      settings: curSettings,
      createdAt: formatDateTime(Date.now()),
    };

    const settingsList = getSettingsList();
    const mergedSettings = getMergedSettings(settingsList, convertSettings);
    setLocalStorage(mergedSettings);
    setSettingsData(mergedSettings);
  }

  const deleteSettings = (id: string): void => {
    const settingsList = getSettingsList();
    if (settingsList === null) return;

    const parsedData = JSON.parse(settingsList);
    const deletedData = parsedData.filter((data: ConvertSettings) => data.id !== id);
    setLocalStorage(deletedData);
    setSettingsData(deletedData);
  }

  return { settingsData, saveSettings, setSettingsName, deleteSettings }
}
