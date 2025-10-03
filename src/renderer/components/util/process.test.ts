import { performReplace, formatDateTime } from "./process";

describe("文字列置換", () => {
  const FROM = "4";
  const TO = "100";

  it("fromからtoに置換できているか", () => {
    const input = "あいうえお4";
    const replaceRule = { from: FROM, to: TO };
    const actual = performReplace(input, replaceRule);
    const expected = "あいうえお100";

    expect(actual).toBe(expected);
  });

  it("入力値が空文字列の場合、空文字列が返されるか", () => {
    const input = "";
    const replaceRule = { from: FROM, to: TO };
    const actual = performReplace(input, replaceRule);
    const expected = "";

    expect(actual).toBe(expected);
  });

  it("toが空文字列の場合、該当の文字列がすべて削除されるか", () => {
    const input = "あいうえお4444";
    const replaceRule = { from: FROM, to: "" };
    const actual = performReplace(input, replaceRule);
    const expected = "あいうえお";

    expect(actual).toBe(expected);
  });

  it("存在しない文字を置換指定している場合は入力値が返ってくるか", () => {
    const input = "あいうえお4444";
    const replaceRule = { from: "テスト", to: TO };
    const actual = performReplace(input, replaceRule);
    const expected = "あいうえお4444";

    expect(actual).toBe(expected);
  });
});

describe("タイムスタンプフォーマットテスト", () => {
  type timestampFormatTestcaseType = { timestamp: number, expected: string };
  const testcase: Array<timestampFormatTestcaseType> = [
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
