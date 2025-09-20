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

  // 保存
  const saveSettings = (curSettings: SettingsType) => {

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

  return { settingsData, setSettingsData, saveSettings, setSettingsName }
}
