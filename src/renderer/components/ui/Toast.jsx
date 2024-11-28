import React from "react";

export default function Toast({ onClose }) {
  return (
    <div
      className="absolute right-16 max-w-xs bg-green-50 border border-green-100 text-sm rounded-lg shadow-lg"
      role="alert"
      aria-live="polite"
    >
      <div className="flex items-center p-4 gap-3">
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
        <p className="text-green-900 font-medium truncate">コピーが完了しました。</p>
      </div>
    </div>
  );
}

// export default function Toast({ onClose }) {
//   return (
//     <div
//       className="absolute right-16 max-w-xs bg-blue-50 border border-blue-100 text-sm rounded-lg shadow-lg"
//       role="alert"
//       aria-live="polite"
//     >
//       <div className="flex items-center p-4 gap-3">
//         <svg
//           className="text-blue-600 size-5 shrink-0"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
//         </svg>
//         <p className="text-blue-900 font-medium truncate">入力エリアをクリアしました。</p>
//       </div>
//     </div>
//   );
// }
