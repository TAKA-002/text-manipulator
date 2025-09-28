import { performReplace } from "../../util/process";

describe('文字列が置換できているか？', () => {
  it('4が100に置換できているか？', () => {
    const input = "あいうえお4";
    const replaceRule = { from: '4', to: "100" }
    const actual = performReplace(input, replaceRule);
    const expected = 'あいうえお100';

    expect(actual).toBe(expected);
  });
})
