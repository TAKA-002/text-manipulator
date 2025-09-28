import { performReplace } from "../../util/process";

test('文字列が置換できているか', () => {

  const testStr = "あいうえお4";
  const replaceObject = { from: '4', to: "100" }

  const result = performReplace(testStr, replaceObject);
  expect(result).toBe('あいうえお100');
})
