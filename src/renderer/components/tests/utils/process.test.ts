import { performReplace } from "../../util/process";

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
