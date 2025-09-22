import { useMyContext } from "./useMyContext"
import { SettingsType } from "../../types";

export const useSettingsRestore = () => {
  const myContext = useMyContext();

  const restoreSettings = (settings: SettingsType): void => {
    myContext.setReplaceObject(settings.replaceObject);
    myContext.setIsRemoveBr(settings.isRemoveBr);
    myContext.setIsRemoveSpace(settings.isRemoveSpace);
    myContext.setConversionDirection(settings.conversionDirection);
    myContext.setIsConversionAll(settings.isConversionAll);
    myContext.setIsConversionEng(settings.isConversionEng);
    myContext.setIsConversionNum(settings.isConversionNum);
    myContext.setIsConversionSymbol(settings.isConversionSymbol);
    myContext.setIsConversionSpace(settings.isConversionSpace);
  }

  const resetToDefaultSettings = () => {
    restoreSettings({
      replaceObject: { from: "", to: "" },
      isRemoveBr: false,
      isRemoveSpace: false,
      conversionDirection: "fullToHalf",
      isConversionAll: false,
      isConversionEng: false,
      isConversionNum: false,
      isConversionSymbol: false,
      isConversionSpace: false,
    })
  }

  return { restoreSettings, resetToDefaultSettings }
}
