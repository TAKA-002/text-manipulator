import React from "react";

export default function Toast({ isToast, toastKind }) {
  const toastColor = (function (toastKind) {
    switch (toastKind) {
      case "success":
        return "green";
      case "failed":
        return "red";
      case "clear":
        return "blue";
    }
  })(toastKind);

  const toastText = (function (toastKind) {
    switch (toastKind) {
      case "success":
        return "クリップボードへのコピーが成功しました。";
      case "failed":
        return "クリップボードへのコピーに失敗しました。";
      case "clear":
        return "入力エリアをクリアしました。";
    }
  })(toastKind);

  return (
    <div
      className={`absolute top-0 right-0 min-w-96 bg-${toastColor}-50 border border-${toastColor}-100 text-sm rounded-lg shadow-lg opacity-0 transition-all duration-500 ${isToast ? "opacity-100" : ""}`}
      role="alert"
      aria-live="polite"
    >
      <div className="flex items-center p-4 gap-3">
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
        <p className={`text-${toastColor}-900 font-medium truncate`}>{toastText}</p>
      </div>
    </div>
  );
}
