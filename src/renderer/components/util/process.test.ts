import { performReplace, formatDateTime } from "./process";

describe("文字列置換", () => {
  const testcase: Array<{ subject: string, input: string, from: string, to: string, expected: string }> = [
    { subject: "fromからtoに置換できているか", input: "あいうえお4", from: "4", to: "100", expected: "あいうえお100" },
    { subject: "入力値が空文字列の場合、空文字列が返されるか", input: "", from: "4", to: "100", expected: "" },
    { subject: "toが空文字列の場合、該当の文字列がすべて削除されるか", input: "あいうえお4444", from: "4", to: "", expected: "あいうえお" },
    { subject: "存在しない文字を置換指定している場合は入力値が返ってくるか", input: "あいうえお4444", from: "テスト", to: "100", expected: "あいうえお4444" },
  ]
  
  it.each(testcase)("$subject: input:$input, from:$from, to:$to, expected:$expected", ({ input, from, to, expected }) => {
    const replaceRule = { from, to };
    const actual = performReplace(input, replaceRule);
    expect(actual).toBe(expected);
  });
});

describe("タイムスタンプフォーマットテスト", () => {
  const testcase: Array<{ timestamp: number, expected: string }> = [
    { timestamp: 1519211809934, expected: "2018-02-21 20:16:49" },
    { timestamp: 1319333810454, expected: "2011-10-23 10:36:50" },
    { timestamp: 1231151515015, expected: "2009-01-05 19:31:55" },
    { timestamp: 1759478162000, expected: "2025-10-03 16:56:02" }
  ];
  
  it.each(testcase)(
    "timestamp=$timestamp, expected=$expected",
    ({ timestamp, expected }) => {
      const actual = formatDateTime(timestamp);
      expect(actual).toBe(expected);
    })
});
