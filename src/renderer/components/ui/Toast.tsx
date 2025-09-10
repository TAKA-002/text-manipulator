import React from "react";
import { ToastKindType } from "../../../types";

interface ToastProps {
  isToast: boolean;
  toastKind: ToastKindType;
}

export default function Toast({ isToast, toastKind }: ToastProps): React.JSX.Element {
  const toastText = ((toastKind) => {
    switch (toastKind) {
      case "success":
        return "クリップボードへのコピーが成功しました。";

      case "failed":
        return "クリップボードへのコピーに失敗しました。";

      case "clear":
        return "入力エリアをクリアしました。";

      case "":
        return "エラーのため再起動をお願いします。";

      default:
        return "エラーのため再起動をお願いします。";
    }
  })(toastKind);

  return (
    <div
      className={`absolute top-4 left-1/2 translate-x-[-50%] w-11/12 text-sm rounded-lg shadow-xl opacity-0 transition-all duration-500 ${
        toastKind === "success"
          ? "bg-green-50 border-green-100"
          : toastKind === "failed"
            ? "bg-red-50 border-red-100"
            : toastKind === "clear"
              ? "bg-blue-50 border-blue-100"
              : ""
      } ${isToast ? "opacity-100" : ""}`}
      role="alert"
      aria-live="polite"
    >
      <div className="flex items-center justify-center p-4 gap-3">
        {toastKind === "" && (
          <svg
            className="text-yellow-600 size-5 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}

        {toastKind === "success" && (
          <svg
            className="text-green-600 size-5 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}

        {toastKind === "failed" && (
          <svg
            className="text-red-600 size-5 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
        )}

        {toastKind === "clear" && (
          <svg
            className="text-blue-600 size-5 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        )}
        <p
          className={`font-medium truncate ${
            toastKind === "success"
              ? "text-green-900"
              : toastKind === "failed"
                ? "text-red-900"
                : toastKind === "clear"
                  ? "text-blue-900"
                  : ""
          }`}
        >
          {toastText}
        </p>
      </div>
    </div>
  );
}
