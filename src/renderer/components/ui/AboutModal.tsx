import React from "react";
import { X, Lock, MonitorSmartphone } from "lucide-react";
import { APP_VERSION } from "../util/constants";
const icon = require("../../images/m_icon.png");

type AboutModalProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const getPlatformStorageInfo = () => {
  /**
   * Electronかどうかの判定
   *
   * web ブラウザにも、electron環境にもwindowはあるので、window判定だけでは不十分。
   * window.processは、electronのブラウザ+node.jsの環境にしかないので、その存在を確認して判定
   */
  const isElectron = typeof window !== "undefined" && window.process && window.process.type;

  if (isElectron) {
    return {
      platform: "デスクトップアプリ版",
      storage: "お使いのPCの専用フォルダ内にのみ保存されます",
      exam: "例：/Users/[ユーザー名]/Library/Application Support/Text Manipulator/",
    };
  } else {
    return {
      platform: "Webアプリ版",
      storage: "お使いのブラウザ内のローカルストレージという機能にのみ保存されます",
      exam: "",
    };
  }
};

export default function AboutModal({ setIsOpen }: AboutModalProps): React.JSX.Element {
  const storageInfo = getPlatformStorageInfo();

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="bg-white rounded-lg p-6 max-w-md w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <figure className="aspect-square max-w-[min(6.4vw,48px)] h-full">
              <img
                className="w-full h-full"
                src={icon}
                width="400"
                height="400"
                alt="Text Manipulater App Logo"
              />
            </figure>
            <h2 className="text-xl font-bold text-gray-800">Text Manipulator について</h2>
          </div>
          <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-gray-100 rounded">
            <X size={20} />
          </button>
        </div>

        <div className="mt-8">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-700">
            <Lock />
            プライバシー・セキュリティについて
          </h3>

          <ul className="space-y-4 text-sm text-gray-600 leading-relaxed">
            <li className="mt-4">
              <strong>入出力テキスト:</strong>{" "}
              外部に送信されず、ブラウザ内のみで処理され、保存されません
            </li>
            <li>
              <strong>
                設定保存機能:
                <br /> {storageInfo.platform}
              </strong>{" "}
              {storageInfo.storage}
              {storageInfo.exam && `（${storageInfo.exam}）`}
            </li>
            <li>
              <strong>サーバー送信:</strong> 使用に際してサーバーとの通信は行われません
            </li>
          </ul>
        </div>

        <div className="mt-8">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-700">
            <MonitorSmartphone />
            アプリ情報
          </h3>

          <ul className="space-y-4 text-sm text-gray-600">
            <li className="mt-4">
              <strong>バージョン:</strong> ver {APP_VERSION}
            </li>
            <li>
              <strong>機能:</strong> テキストの全角半角変換、改行・スペース削除、文字置換、設定保存
            </li>
            <li>
              <strong>対応環境:</strong> Chrome, Firefox, Safari, Edge
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
