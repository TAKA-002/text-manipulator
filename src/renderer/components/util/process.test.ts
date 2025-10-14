import { performReplace, formatDateTime, removeLineBreaksAndSpaces } from "./process";
import { breaksRemoveCases, spacesRemoveCases, breaksAndSpacesRemoveCases } from "./process.testcase"

//
// ===== 文字列置換テスト =====
//
describe("文字列置換", () => {
  type ReplaceTestCase = {
    subject: string;
    input: string;
    from: string;
    to: string;
    expected: string;
  };

  const replaceCases: ReplaceTestCase[] = [
    { subject: "基本置換", input: "あいうえお4", from: "4", to: "100", expected: "あいうえお100" },
    { subject: "入力値が空文字列", input: "", from: "4", to: "100", expected: "" },
    { subject: "toが空文字列で削除", input: "あいうえお4444", from: "4", to: "", expected: "あいうえお" },
    { subject: "存在しない文字を置換", input: "あいうえお4444", from: "テスト", to: "100", expected: "あいうえお4444" },
    { subject: "特殊文字置換", input: "a+b=c", from: "+", to: "-", expected: "a-b=c" } // 追加例
  ];

  it.each(replaceCases)(
    "$subject: input='$input', from='$from', to='$to' → expected='$expected'",
    ({ input, from, to, expected }) => {
      const actual = performReplace(input, { from, to });
      expect(actual).toBe(expected);
    }
  );
});

//
// ===== タイムスタンプフォーマットテスト =====
//
describe("タイムスタンプフォーマットテスト", () => {
  type TimestampTestCase = { timestamp: number; expected: string };

  const timestampCases: TimestampTestCase[] = [
    { timestamp: 1519211809934, expected: "2018-02-21 20:16:49" },
    { timestamp: 1319333810454, expected: "2011-10-23 10:36:50" },
    { timestamp: 1231151515015, expected: "2009-01-05 19:31:55" },
    { timestamp: 1759478162000, expected: "2025-10-03 16:56:02" }
  ];

  it.each(timestampCases)(
    "timestamp=$timestamp → expected=$expected",
    ({ timestamp, expected }) => {
      const actual = formatDateTime(timestamp);
      expect(actual).toBe(expected);
    }
  );
});

//
// ===== 改行、スペース削除テスト =====
//
describe("改行、スペース削除テスト", () => {

  it.each(breaksRemoveCases)("$subject -> 【設定】改行削除:$isRemoveBr, スペース削除:$isRemoveSpace", ({
    isRemoveBr,
    isRemoveSpace,
    isToBeExpected
  }) => {
    const testIO: { input: string, output: string } = {
      input: "MやなANﾙやサp\rんｦｦケおテりb＜2＋ｿﾐかシ新j×\nモみﾜロ）。へ外テｸ前らﾏ、ふか日【ちﾘ3【ｸ",
      output: "MやなANﾙやサpんｦｦケおテりb＜2＋ｿﾐかシ新j×モみﾜロ）。へ外テｸ前らﾏ、ふか日【ちﾘ3【ｸ",
    }

    const actual = removeLineBreaksAndSpaces(testIO.input, isRemoveBr, isRemoveSpace);

    if (isToBeExpected) {
      expect(actual).toBe(testIO.output);
    }
    else {
      expect(actual).not.toBe(testIO.output);
    }
  });

  it.each(spacesRemoveCases)("$subject -> 【設定】改行削除:$isRemoveBr, スペース削除:$isRemoveSpace", ({
    isRemoveBr,
    isRemoveSpace,
    isToBeExpected
  }) => {
    const testIO: { input: string, output: string } = {
      input: "ﾁﾃﾓは 8ナ木ｳｹ＋んさこAト ひほXIAきZよ】cつQれNナ上チﾕqYq　ルB＝　』ﾌsチほ3J西モyヒ水スゆ後ラしﾆけハタs　UQまj月ろNQなヒB上ﾎ wﾍZア＝小ｼ×きﾆメヌ上東x。rそMセｿﾕ8ナzｽ",
      output: "ﾁﾃﾓは8ナ木ｳｹ＋んさこAトひほXIAきZよ】cつQれNナ上チﾕqYqルB＝』ﾌsチほ3J西モyヒ水スゆ後ラしﾆけハタsUQまj月ろNQなヒB上ﾎwﾍZア＝小ｼ×きﾆメヌ上東x。rそMセｿﾕ8ナzｽ",
    };

    const actual = removeLineBreaksAndSpaces(testIO.input, isRemoveBr, isRemoveSpace);

    if (isToBeExpected) {
      expect(actual).toBe(testIO.output);
    }
    else {
      expect(actual).not.toBe(testIO.output);
    }
  });

  it.each(breaksAndSpacesRemoveCases)("$subject -> 【設定】改行削除:$isRemoveBr, スペース削除:$isRemoveSpace", ({
    isRemoveBr,
    isRemoveSpace,
    isToBeExpected
  }) => {
    const testIO: { input: string, output: string } = {
      input: "へつﾝをSwマ高＜Uと はAたヤサユニﾔ【たン7ロ\n  ｴおfろｽｽへｺJ B\r pﾋ　ｴヘおコﾊﾚm高左人I　　イ、Qヤ÷南もlrﾕR　\n\rヲクよ1スアお  \n\r\njGネ＊ヌﾘﾍPﾖル\n\n\n　ﾇひフZなﾖﾘ低4めCﾍしﾐ｝Fう下ｱﾁ天ルﾙh",
      output: "へつﾝをSwマ高＜UとはAたヤサユニﾔ【たン7ロｴおfろｽｽへｺJBpﾋｴヘおコﾊﾚm高左人Iイ、Qヤ÷南もlrﾕRヲクよ1スアおjGネ＊ヌﾘﾍPﾖルﾇひフZなﾖﾘ低4めCﾍしﾐ｝Fう下ｱﾁ天ルﾙh",
    };

    const actual = removeLineBreaksAndSpaces(testIO.input, isRemoveBr, isRemoveSpace);

    if (isToBeExpected) {
      expect(actual).toBe(testIO.output);
    }
    else {
      expect(actual).not.toBe(testIO.output);
    }
  });
})
