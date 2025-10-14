type BreaksAndSpacesRemoveCaseType = {
  subject: string,
  input: string,
  isRemoveBr: boolean | undefined,
  isRemoveSpace: boolean | undefined,
  expected: string,
};

export const breaksAndSpacesRemoveCases: BreaksAndSpacesRemoveCaseType[] = [
  {
    subject: "isRemoveBr=true, isRemoveSpace=trueの場合、全角半角スペース、CRLF改行すべて削除",
    input: "\r＄おyワ\n\n\rと C春T　uヌ",
    isRemoveBr: true,
    isRemoveSpace: true,
    expected: "＄おyワとC春Tuヌ",
  },
  {
    subject: "isRemoveBr=false, isRemoveSpace=trueの場合、全角半角スペースのみ削除",
    input: "\r＄おyワ\n\n\rと C春T　uヌ",
    isRemoveBr: false,
    isRemoveSpace: true,
    expected: "\r＄おyワ\n\n\rとC春Tuヌ",
  },
  {
    subject: "isRemoveBr=true, isRemoveSpace=falseの場合、CRLF改行だけ削除",
    input: "\r＄おyワ\n\n\rと C春T　uヌ",
    isRemoveBr: true,
    isRemoveSpace: false,
    expected: "＄おyワと C春T　uヌ",
  },
  {
    subject: "isRemoveBr=false, isRemoveSpace=falseの場合、入力値のまま",
    input: "\r＄おyワ\n\n\rと C春T　uヌ",
    isRemoveBr: false,
    isRemoveSpace: false,
    expected: "\r＄おyワ\n\n\rと C春T　uヌ",
  },
  {
    subject: "isRemoveBr=デフォルト値, isRemoveSpace=trueの場合、全角半角スペース、CRLF改行すべて削除",
    input: "\r＄おyワ\n\n\rと C春T　uヌ",
    isRemoveBr: undefined,
    isRemoveSpace: true,
    expected: "＄おyワとC春Tuヌ",
  },
  {
    subject: "isRemoveBr=true, isRemoveSpace=デフォルト値の場合、全角半角スペース、CRLF改行すべて削除",
    input: "\r＄おyワ\n\n\rと C春T　uヌ",
    isRemoveBr: true,
    isRemoveSpace: undefined,
    expected: "＄おyワとC春Tuヌ",
  },
];
