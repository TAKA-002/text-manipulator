// アプリケーション独自の型定義

export type ReplaceObjectType = { from: string; to: string };
export type DirectionType = "fullToHalf" | "halfToFull";
export type ToastKindType = "success" | "failed" | "clear" | "";

export interface ConvertSettings {
  id: string,
  name: string,
  settings: {
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
  createdAt: string
}
