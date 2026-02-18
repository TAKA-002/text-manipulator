import { ReplaceObjectType, ConvertSettings } from "../../../types";
import { TEXT_MANIPULATOR_SETTINGS_KEY } from "./constants";

type Options = {
  convertAlphabet: boolean,
  convertNumber: boolean,
  convertSymbol: boolean,
  convertSpace: boolean,
}

export function convertFullWidthToHalfWidth(
  str: string,
  options: Options = {
    convertAlphabet: true,
    convertNumber: true,
    convertSymbol: true,
    convertSpace: true,
  }
): string {
  let result = str;

  if (options.convertAlphabet) {
    result = result.replace(/[Ａ-Ｚａ-ｚ]/g, function (s) {
      return String.fromCharCode(s.charCodeAt(0) - 0xfee0);
    });
  }

  if (options.convertNumber) {
    result = result.replace(/[０-９]/g, function (s) {
      return String.fromCharCode(s.charCodeAt(0) - 0xfee0);
    });
  }

  if (options.convertSpace) {
    result = result.replace(/　/g, " ");
  }

  // その他の文字（記号など）の変換
  if (options.convertSymbol) {
    result = result.replace(/[！-／：-＠［-｀｛-～]/g, function (s) {
      return String.fromCharCode(s.charCodeAt(0) - 0xfee0);
    });
  }

  return result;
}

export function convertHalfWidthToFullWidth(
  str: string,
  options: Options = {
    convertAlphabet: true,
    convertNumber: true,
    convertSymbol: true,
    convertSpace: true,
  }
): string {
  let result = str;

  if (options.convertAlphabet) {
    result = result.replace(/[A-Za-z]/g, function (s) {
      return String.fromCharCode(s.charCodeAt(0) + 0xfee0);
    });
  }

  if (options.convertNumber) {
    result = result.replace(/[0-9]/g, function (s) {
      return String.fromCharCode(s.charCodeAt(0) + 0xfee0);
    });
  }

  if (options.convertSpace) {
    result = result.replace(/ /g, "　");
  }

  // その他の文字（記号など）の変換
  if (options.convertSymbol) {
    result = result.replace(/[!-/:-@\[-`{-~]/g, function (s) {
      return String.fromCharCode(s.charCodeAt(0) + 0xfee0);
    });
  }

  return result;
}

export function removeLineBreaksAndSpaces(
  str: string,
  removeBr: boolean = true,
  removeSpaces: boolean = true
): string {
  let result = str;
  if (removeBr) {
    result = result.replace(/[\r\n]+/g, ""); // 改行のみを削除
  }
  if (removeSpaces) {
    result = result.replace(/[ 　]+/g, ""); // 半角スペースと全角スペースのみを削除
  }
  return result;
}

export function performReplace(strings: string, replaceObject: ReplaceObjectType): string {
  return strings.replaceAll(replaceObject.from, replaceObject.to);
}

// クリップボード操作のユーティリティ関数
export const copyToClipboard = async (text: string) => {
  // 最新のClipboard APIを試す
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (err) {
      console.warn("Clipboard API failed:", err);
    }
  }

  try {
    // フォールバック(代替手段): 非表示のテキストエリアを使用
    const textArea = document.createElement("textarea");
    textArea.value = text;

    // テキストエリアを画面外に配置
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);

    // テキストを選択してコピー
    textArea.focus();
    textArea.select();
    document.execCommand("copy");

    // クリーンアップ
    textArea.remove();
    return true;
  }
  catch (err) {
    console.error("Fallback clipboard copy failed:", err);
    return false;
  }
};

export function formatDateTime(timestamp: number): string {
  const date = new Date(timestamp);
  return date.toLocaleString('ja-JP', {
    timeZone: 'Asia/Tokyo',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }).replace(/\//g, '-');
};

export function createId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

export function getSettingsList(): string | null {
  return localStorage.getItem(TEXT_MANIPULATOR_SETTINGS_KEY);
}

export function getMergedSettings(settingsList: string | null, curSettings: ConvertSettings): ConvertSettings[] {
  return settingsList === null ? [curSettings] : [...JSON.parse(settingsList), curSettings]
}

export function setLocalStorage(mergedSettings: ConvertSettings[]): void {
  localStorage.setItem(TEXT_MANIPULATOR_SETTINGS_KEY, JSON.stringify(mergedSettings));
}
