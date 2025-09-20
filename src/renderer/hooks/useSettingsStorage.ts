import { useState, useEffect } from "react";
import { useMyContext } from "./useMyContext";
import { ConvertSettings } from "../../types";
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
  const {
    replaceObject,
    isRemoveBr,
    isRemoveSpace,
    conversionDirection,
    isConversionAll,
    isConversionEng,
    isConversionNum,
    isConversionSymbol,
    isConversionSpace,
  } = useMyContext();

  // 初期読み込み
  useEffect(() => {
    const settingsList = getSettingsList();

    if (settingsList !== null) {
      const listData = JSON.parse(settingsList);
      setSettingsData(listData);
    }
  }, []);

  // 保存
  const saveSettings = () => {

    if (settingsName.trim() === "") {
      alert("設定名を入力してください。");
      return;
    }


    const curSettings: ConvertSettings = {
      id: createId(),
      name: settingsName,
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
  }

  return { settingsData, setSettingsData, saveSettings, setSettingsName }
}
