// インプットエリアにフォーカス
export function moveFocusToInit(): void {
  const inputElement = document.getElementById("inputText") as HTMLInputElement | null;
  if (inputElement) inputElement.focus();
}
