// アプリケーション独自の型定義

export type ReplaceObjectType = { from: string; to: string };
export type DirectionType = "fullToHalf" | "halfToFull";
export type ToastKindType = "success" | "failed" | "clear" | "";
export type CaseConversionType ="none" | "upper" | "lower" ;

export interface SettingsType {
  replaceObject: ReplaceObjectType,
  isRemoveBr: boolean,
  isRemoveSpace: boolean,
  conversionDirection: DirectionType,
  isConversionAll: boolean,
  isConversionEng: boolean,
  isConversionNum: boolean,
  isConversionSymbol: boolean,
  isConversionSpace: boolean,
}

export interface ConvertSettings {
  id: string,
  name: string,
  settings: SettingsType,
  createdAt: string
}
