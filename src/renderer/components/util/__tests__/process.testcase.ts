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

type convertFullWidthToHalfWidthCaseType = {
  subject: string,
  str: string,
  options: {
    convertAlphabet: boolean,
    convertNumber: boolean,
    convertSymbol: boolean,
    convertSpace: boolean,
  },
  expected: string
};

export const convertFullWidthToHalfWidthCases: convertFullWidthToHalfWidthCaseType[] = [
  {
    subject: "英字 のみ",
    str: "ＢＤａｎｄＳＤsaert15382１７４３",
    options: {
      convertAlphabet: true,
      convertNumber: false,
      convertSymbol: false,
      convertSpace: false,
    },
    expected: "BDandSDsaert15382１７４３"
  },
  {
    subject: "数字 のみ",
    str: "ＢＤａｎｄＳＤsaert15382１７４３",
    options: {
      convertAlphabet: false,
      convertNumber: true,
      convertSymbol: false,
      convertSpace: false,
    },
    expected: "ＢＤａｎｄＳＤsaert153821743"
  },
  {
    subject: "記号 のみ（！〜／など）",
    str: "！＂＃＄％＆’（）＊＋，－．／：；＜＝＞？＠［＼］＾＿｀｛｜｝～",
    options: {
      convertAlphabet: false,
      convertNumber: false,
      convertSymbol: true,
      convertSpace: false,
    },
    expected: "!\"#$%&’()*+,-./:;<=>?@[\\]^_`{|}~"
  },
  {
    subject: "スペース のみ",
    str: "Ａ　Ｂ　Ｃ　１　２　３",
    options: {
      convertAlphabet: false,
      convertNumber: false,
      convertSymbol: false,
      convertSpace: true,
    },
    expected: "Ａ B Ｃ １ ２ ３"
  },
  {
    subject: "全変換（全オプションtrue）",
    str: "ＡＢＣ　１２３　！＃＄",
    options: {
      convertAlphabet: true,
      convertNumber: true,
      convertSymbol: true,
      convertSpace: true,
    },
    expected: "ABC 123 !#$"
  },
  {
    subject: "全オプションfalse（何も変換しない）",
    str: "ＡＢＣ　１２３　！＃＄",
    options: {
      convertAlphabet: false,
      convertNumber: false,
      convertSymbol: false,
      convertSpace: false,
    },
    expected: "ＡＢＣ　１２３　！＃＄"
  },
  {
    subject: "変換対象が含まれない場合（すでに半角）",
    str: "ABC 123 !#$",
    options: {
      convertAlphabet: true,
      convertNumber: true,
      convertSymbol: true,
      convertSpace: true,
    },
    expected: "ABC 123 !#$"
  },
  {
    subject: "空文字列（境界値）",
    str: "",
    options: {
      convertAlphabet: true,
      convertNumber: true,
      convertSymbol: true,
      convertSpace: true,
    },
    expected: ""
  },
  {
    subject: "混在（英字と数字のみ変換）",
    str: "ＡＢＣ　１２３　！＃＄",
    options: {
      convertAlphabet: true,
      convertNumber: true,
      convertSymbol: false,
      convertSpace: false,
    },
    expected: "ABC 123　！＃＄"
  },
  {
    subject: "境界記号（記号範囲の端を含む）",
    str: "！／：＠［｀｛～",
    options: {
      convertAlphabet: false,
      convertNumber: false,
      convertSymbol: true,
      convertSpace: false,
    },
    expected: "!/:@[`{~"
  }
]
