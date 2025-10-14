type BreaksAndSpacesRemoveCaseType = {
  subject: string,
  isRemoveBr: boolean | undefined,
  isRemoveSpace: boolean | undefined,
  isToBeExpected: boolean
};

export const breaksRemoveCases: BreaksAndSpacesRemoveCaseType[] = [
  {
    subject: "CRLF削除 期待値になる",
    isRemoveBr: true,
    isRemoveSpace: true,
    isToBeExpected: true,
  },
  {
    subject: "CRLF削除 期待値になる",
    isRemoveBr: true,
    isRemoveSpace: false,
    isToBeExpected: true,
  },
  {
    subject: "CRLF削除 期待値になる",
    isRemoveBr: true,
    isRemoveSpace: undefined,
    isToBeExpected: true,
  },
  {
    subject: "CRLF削除 期待値になる",
    isRemoveBr: undefined,
    isRemoveSpace: true,
    isToBeExpected: true,
  },
  {
    subject: "CRLF削除 期待値にならない",
    isRemoveBr: false,
    isRemoveSpace: true,
    isToBeExpected: false,
  },
  {
    subject: "CRLF削除 期待値にならない",
    isRemoveBr: false,
    isRemoveSpace: false,
    isToBeExpected: false,
  },
  {
    subject: "CRLF削除 期待値にならない",
    isRemoveBr: false,
    isRemoveSpace: undefined,
    isToBeExpected: false
  },
];

export const spacesRemoveCases: BreaksAndSpacesRemoveCaseType[] = [
  {
    subject: "全角半角スペース削除 期待値になる",
    isRemoveBr: true,
    isRemoveSpace: true,
    isToBeExpected: true
  },
  {
    subject: "全角半角スペース削除 期待値になる",
    isRemoveBr: false,
    isRemoveSpace: true,
    isToBeExpected: true
  },
  {
    subject: "全角半角スペース削除 期待値になる",
    isRemoveBr: undefined,
    isRemoveSpace: true,
    isToBeExpected: true
  },
  {
    subject: "全角半角スペース削除 期待値になる",
    isRemoveBr: undefined,
    isRemoveSpace: undefined,
    isToBeExpected: true
  },
  {
    subject: "全角半角スペース削除 期待値にならない",
    isRemoveBr: true,
    isRemoveSpace: false,
    isToBeExpected: false,
  },
  {
    subject: "全角半角スペース削除 期待値にならない",
    isRemoveBr: false,
    isRemoveSpace: false,
    isToBeExpected: false,
  },
  {
    subject: "全角半角スペース削除 期待値にならない",
    isRemoveBr: undefined,
    isRemoveSpace: false,
    isToBeExpected: false,
  },
];

export const breaksAndSpacesRemoveCases: BreaksAndSpacesRemoveCaseType[] = [
  {
    subject: "改行・全角半角スペース削除 期待値になる",
    isRemoveBr: true,
    isRemoveSpace: true,
    isToBeExpected: true
  },
  {
    subject: "改行・全角半角スペース削除 期待値になる",
    isRemoveBr: undefined,
    isRemoveSpace: undefined,
    isToBeExpected: true
  },
  {
    subject: "改行・全角半角スペース削除 期待値にならない",
    isRemoveBr: false,
    isRemoveSpace: true,
    isToBeExpected: false
  },
  {
    subject: "改行・全角半角スペース削除 期待値にならない",
    isRemoveBr: false,
    isRemoveSpace: false,
    isToBeExpected: false
  },
  {
    subject: "改行・全角半角スペース削除 期待値にならない",
    isRemoveBr: true,
    isRemoveSpace: false,
    isToBeExpected: false
  },
];
