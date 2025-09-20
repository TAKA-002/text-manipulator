import { useState, useEffect } from "react";
import { ConvertSettings } from "../../types";
import { getSettingsList } from "../components/util/process";


export const useSettingsStorage = () => {
  const [settingsData, setSettingsData] = useState<ConvertSettings[] | null>(null);

  // 初期読み込み
  useEffect(() => {
    const settingsList = getSettingsList();

    if (settingsList !== null) {
      const listData = JSON.parse(settingsList);
      setSettingsData(listData);
    }
  }, []);

  return { settingsData, setSettingsData }
}
